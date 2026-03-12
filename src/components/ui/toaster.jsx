import { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { dismiss, subscribe } from "@/utils/toast";

const toastStyles = {
  success: {
    icon: CheckCircle2,
    iconWrap:
      "bg-emerald-500/14 text-emerald-700 ring-1 ring-emerald-600/12",
    rail: "from-emerald-500 to-emerald-600",
    progress: "from-emerald-500 via-emerald-400 to-emerald-600",
    badge: "text-emerald-700/80",
  },
  error: {
    icon: AlertCircle,
    iconWrap: "bg-rose-500/12 text-rose-700 ring-1 ring-rose-600/12",
    rail: "from-rose-500 to-orange-500",
    progress: "from-rose-500 via-orange-400 to-rose-600",
    badge: "text-rose-700/85",
  },
  warning: {
    icon: TriangleAlert,
    iconWrap: "bg-amber-500/14 text-amber-700 ring-1 ring-amber-600/12",
    rail: "from-amber-500 to-orange-500",
    progress: "from-amber-500 via-orange-400 to-amber-600",
    badge: "text-amber-700/85",
  },
  info: {
    icon: Info,
    iconWrap: "bg-sky-500/12 text-sky-700 ring-1 ring-sky-600/12",
    rail: "from-sky-500 to-indigo-500",
    progress: "from-sky-500 via-indigo-400 to-sky-600",
    badge: "text-sky-700/85",
  },
};

const labels = {
  success: "Success",
  error: "Error",
  warning: "Notice",
  info: "Info",
};

function ToastCard({ toast }) {
  const styles = toastStyles[toast.variant] ?? toastStyles.info;
  const Icon = styles.icon;

  return (
    <div
      className="animate-in fade-in slide-in-from-top-3 relative overflow-hidden rounded-[18px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(255,248,238,0.96))] px-3.5 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.14)] backdrop-blur-xl duration-300"
      role="status"
      aria-live={toast.variant === "error" ? "assertive" : "polite"}
    >
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1 bg-gradient-to-b",
          styles.rail,
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.92),transparent_36%)] pointer-events-none" />
      <div className="relative flex items-start gap-2.5">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-xl shadow-sm",
            styles.iconWrap,
          )}
        >
          <Icon className="size-4.5" />
        </div>
        <div className="min-w-0 flex-1 pr-1">
          <div className="mb-0.5 flex items-center gap-2">
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.16em]",
                styles.badge,
              )}
            >
              {toast.title ?? labels[toast.variant]}
            </span>
          </div>
          <p className="text-[13px] font-semibold leading-5 text-slate-900">
            {toast.message}
          </p>
        </div>
        <button
          type="button"
          onClick={() => dismiss(toast.id)}
          className="mt-0.5 text-slate-400 transition hover:text-slate-700"
          aria-label="Dismiss notification"
        >
          <X className="size-3.5" />
        </button>
      </div>
      <div className="relative mt-2.5 h-1 overflow-hidden rounded-full bg-slate-200/70">
        <div
          className={cn(
            "toast-progress absolute inset-y-0 right-0 rounded-full bg-gradient-to-r",
            styles.progress,
          )}
          style={{ animationDuration: `${toast.duration}ms` }}
        />
      </div>
    </div>
  );
}

export function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => subscribe(setToasts), []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-[360px] flex-col gap-2.5 sm:max-w-[380px]">
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} />
        ))}
      </div>
    </div>
  );
}
