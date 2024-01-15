import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from '../features/dashboard/dashboardSlice';

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer
  }
});

export default store;