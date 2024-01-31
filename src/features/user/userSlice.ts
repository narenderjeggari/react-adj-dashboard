
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    // Your reducers here
  },
});

export const { } = userSlice.actions;
export default userSlice;
