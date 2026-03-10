import { configureStore } from "@reduxjs/toolkit";
import campaign from "./campaign/campaign.reducer";
import campaginer from "./campaigners/campaigners.reducer";
import seva from "./seva/seva.reducer";
import donation from "./Donations/donations.reducer";
import auth from "./auth/auth.reducer";
import devote from "./devotees/devote.reducer";

const store = configureStore({
  reducer: {
    campaign,
    campaginer,
    seva,
    donation,
    auth,
    devote,
  },
});

export default store;
