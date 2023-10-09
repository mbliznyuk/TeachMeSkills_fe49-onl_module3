import { call, put, takeLatest } from 'typed-redux-saga';
import {
  register,
  registerFailure,
  registerSuccess,
} from './registration.slice';
import { api } from './api';
import { RegistrationResponse } from './types';

export function* registerSaga() {
  yield takeLatest(register, function* registerHandler({ payload }) {
    const data: RegistrationResponse = yield* call(api.register, payload);

    if (data) {
      yield put(registerSuccess(data)); // put == dispatch
    } else {
      yield put(registerFailure());
    }
  });
}
