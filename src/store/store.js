import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./payment/payment.reducer";
import campaign from "./campaign/campaign.reducer";
import campaginer from "./campaigners/campaigners.reducer";

const store = configureStore({
  reducer: {
    campaign,
    campaginer,
  },
});

export default store;
