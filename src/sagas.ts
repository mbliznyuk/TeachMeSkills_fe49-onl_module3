import { getAllPostsSaga } from '#features/all-posts/all-posts.sagas';
import { activateSaga } from '#features/auth/activation.sagas';
import { registerSaga } from '#features/auth/registration.sagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([registerSaga(), getAllPostsSaga(), activateSaga()]);
}
