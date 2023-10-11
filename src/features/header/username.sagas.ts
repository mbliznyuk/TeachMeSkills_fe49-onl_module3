import { call, put, takeLatest } from 'typed-redux-saga';
import { profileApi } from './api';
import { UserNameResponse } from './types';
import {
  getProfile,
  getProfileFailure,
  getProfileSuccess,
} from './username.slice';

export function* profileSaga() {
  yield takeLatest(getProfile, function* registerHandler() {
    const data: UserNameResponse = yield* call(profileApi.getProfile);

    if (data) {
      yield put(getProfileSuccess(data));
    } else {
      yield put(getProfileFailure());
    }
  });
}
