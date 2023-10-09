import { createSlice } from '@reduxjs/toolkit';
import { RegistrationPayload, RegistrationResponse } from './types';

const registrationSlice = createSlice({
  name: 'registrationSlice',
  initialState: {
    isInProgress: false,
    isCompleted: false,
    registrationResponse: null as RegistrationResponse | null,
  },
  reducers: {
    register(state, action: { payload: RegistrationPayload }) {
      state.isInProgress = true;
    },
    registerSuccess(state, action: { payload: RegistrationResponse }) {
      state.isInProgress = false;
      state.isCompleted = true;
      state.registrationResponse = action.payload;
    },
    registerFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { register, registerSuccess, registerFailure },
  reducer: registrationReducer,
} = registrationSlice;
