import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from '../features/dashboard/dashboardSlice';
import userSlice from 'features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    dashboard: dashboardSlice.reducer
  }
});

export default store;