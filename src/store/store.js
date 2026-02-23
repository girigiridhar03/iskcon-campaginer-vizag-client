import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./payment/payment.reducer";

const store = configureStore({
  reducer: {
    payment: paymentReducer,
  },
});

export default store;
