import { createSlice } from '@reduxjs/toolkit';
import { UserNameResponse } from './types';

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: {
    isInProgress: false,
    isCompleted: false,
    profile: {} as UserNameResponse,
  },
  reducers: {
    getProfile(state) {
      state.isInProgress = true;
    },
    getProfileSuccess(state, action: { payload: UserNameResponse }) {
      state.profile = action.payload;
      state.isInProgress = false;
      state.isCompleted = true;
    },
    getProfileFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { getProfile, getProfileSuccess, getProfileFailure },
  reducer: profileReducer,
} = profileSlice;
