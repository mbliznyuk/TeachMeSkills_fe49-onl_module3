import { call, put, takeLatest } from 'typed-redux-saga';

import { api } from './api';
import {
  authorise,
  authoriseFailure,
  authoriseSuccess,
} from './authorisation.slice';
import { setTokens } from '../../api/tokens';

export function* authorisationSaga() {
  yield takeLatest(authorise, function* activateHandler({ payload }) {
    const tokens = yield* call(api.authorise, payload);
    if (tokens) {
      yield call(setTokens, tokens);
      yield put(authoriseSuccess());
    } else {
      yield put(authoriseFailure());
    }
  });
}
