const ERROR_TOAST_ID = "global-error-toast";
const MAX_TOASTS = 3;
const DEFAULT_DURATION = 5200;

let toasts = [];
let counter = 0;
const listeners = new Set();
const timers = new Map();

const emit = () => {
  listeners.forEach((listener) => listener([...toasts]));
};

const scheduleRemoval = (id, duration = DEFAULT_DURATION) => {
  if (timers.has(id)) {
    window.clearTimeout(timers.get(id));
  }

  const timeoutId = window.setTimeout(() => {
    dismiss(id);
  }, duration);

  timers.set(id, timeoutId);
};

const normalizeMessage = (message, fallback) => {
  if (typeof message === "string" && message.trim()) {
    return message;
  }

  return fallback;
};

const createToast = (variant, message, options = {}) => {
  const id = options.toastId ?? `toast-${Date.now()}-${counter++}`;
  const nextToast = {
    id,
    variant,
    title: options.title,
    message,
    duration: options.duration ?? DEFAULT_DURATION,
  };

  if (variant === "error") {
    dismiss(ERROR_TOAST_ID);
    nextToast.id = ERROR_TOAST_ID;
  }

  toasts = [nextToast, ...toasts.filter((toast) => toast.id !== nextToast.id)].slice(
    0,
    MAX_TOASTS,
  );

  emit();
  scheduleRemoval(nextToast.id, nextToast.duration);

  return nextToast.id;
};

export const dismiss = (id) => {
  if (typeof id === "undefined") {
    timers.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timers.clear();
    toasts = [];
    emit();
    return;
  }

  if (timers.has(id)) {
    window.clearTimeout(timers.get(id));
    timers.delete(id);
  }

  const nextToasts = toasts.filter((toast) => toast.id !== id);

  if (nextToasts.length !== toasts.length) {
    toasts = nextToasts;
    emit();
  }
};

export const subscribe = (listener) => {
  listeners.add(listener);
  listener([...toasts]);

  return () => {
    listeners.delete(listener);
  };
};

export const toast = {
  success(message, options = {}) {
    return createToast(
      "success",
      normalizeMessage(message, "Action completed successfully."),
      options,
    );
  },

  info(message, options = {}) {
    return createToast("info", normalizeMessage(message, "Here is an update."), options);
  },

  warning(message, options = {}) {
    return createToast(
      "warning",
      normalizeMessage(message, "Please review this message."),
      options,
    );
  },

  error(message, options = {}) {
    return createToast(
      "error",
      normalizeMessage(message, "Something went wrong. Please try again."),
      { ...options, toastId: ERROR_TOAST_ID },
    );
  },

  dismiss,

  clearWaitingQueue() {},

  isActive(id) {
    return toasts.some((toastItem) => toastItem.id === id);
  },
};

export { ERROR_TOAST_ID, DEFAULT_DURATION, MAX_TOASTS };
