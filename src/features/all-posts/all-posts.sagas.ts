import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess,
} from './all-posts.slice';
import { api } from './api';

export function* getAllPostsSaga() {
  yield takeLatest(getAllPosts, function* getAllPostsHandler() {
    console.log('getAllPosts in saga'); // TODO remove
    const { isOk, posts } = yield* call(api.getAllPosts);

    if (isOk) {
      yield put(getAllPostsSuccess({ posts: posts }));
    } else {
      yield put(getAllPostsFailure({ error: 'Mocked error message' }));
    }
  });
}
