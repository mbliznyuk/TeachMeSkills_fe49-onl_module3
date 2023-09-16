import { configureStore } from '@reduxjs/toolkit'
import { signUpFormSliceReducer } from '#features/sign-up-form/sign-up-form.slice'

export const store = configureStore({
  reducer: {
    signUpForm: signUpFormSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;