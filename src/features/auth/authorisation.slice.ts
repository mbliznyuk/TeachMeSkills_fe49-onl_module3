import { createSlice } from '@reduxjs/toolkit';
import { AuthorisationPayload } from './types';

const authorisationSlice = createSlice({
  name: 'authorisationSlice',
  initialState: {
    isInProgress: false,
    isCompleted: false,
  },
  reducers: {
    authorise(state, action: { payload: AuthorisationPayload }) {
      state.isInProgress = true;
    },
    authoriseSuccess(state) {
      state.isInProgress = false;
      state.isCompleted = true;
    },
    authoriseFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { authorise, authoriseSuccess, authoriseFailure },
  reducer: authorisationReducer,
} = authorisationSlice;
