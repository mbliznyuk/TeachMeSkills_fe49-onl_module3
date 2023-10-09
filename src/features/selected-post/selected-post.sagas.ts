import { call, put, takeLatest } from 'typed-redux-saga';

import { PostCardModel, UserChoice } from '#ui/post_card/post-card.model';
import { selectedPostApi } from './api';
import {
  getSelectedPost,
  getSelectedPostSuccess,
  getSelectedPostsFailure,
} from './selected-posts.slice';
import { SelectedPostResponse } from './types';
import { setRatings } from '#features/like-dislike/like-dislike.slice';

export function* getSelectedPostsSaga() {
  yield takeLatest(getSelectedPost, function* getAllPostsHandler({ payload }) {
    try {
      const response: SelectedPostResponse = yield* call(
        selectedPostApi.getSelectedPost,
        payload.postId
      );

      if (response) {
        const convertedPost = convertPost(response);
        yield put(setRatings([convertedPost]));
        yield put(getSelectedPostSuccess({ post: convertedPost }));
      } else {
        yield put(
          getSelectedPostsFailure({ error: 'response is fine but empty' })
        );
      }
    } catch (error) {
      console.error(error);
      yield put(getSelectedPostsFailure({ error: 'error while requesting' }));
    }
  });
}

function convertPost(postFromApi: SelectedPostResponse): PostCardModel {
  return {
    id: postFromApi.id,
    image: postFromApi.image,
    text: postFromApi.text,
    date: postFromApi.date,
    lesson_num: postFromApi.lesson_num,
    likes_amount: Math.floor(Math.random() * 1000),
    dislikes_amount: Math.floor(Math.random() * 1000),
    user_choice: generateUserChoice(),
    isFavorite: !!Math.floor(Math.random() * 2),
    title: postFromApi.title,
    author: postFromApi.author,
  };
}

function generateUserChoice(): UserChoice {
  const userChoiseNumber = Math.floor(Math.random() * 3);
  switch (userChoiseNumber) {
    case 1:
      return 'like';
    case 2:
      return 'dislike';
    default:
      return null;
  }
}
