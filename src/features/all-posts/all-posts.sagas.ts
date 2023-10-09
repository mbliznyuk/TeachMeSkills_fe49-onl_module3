import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess,
} from './all-posts.slice';
import { allPostsapi as allPostsApi } from './api';
import { AllPostsResponse, AllPostsResponseResult } from './types';
import { PostCardModel, UserChoice } from '#ui/post_card/post-card.model';
import { setRatings } from '#features/like-dislike/like-dislike.slice';
import { setPreview } from '#features/post-image-preview/post-image-preview.slice';

export function* getAllPostsSaga() {
  yield takeLatest(getAllPosts, function* getAllPostsHandler() {
    const respose: AllPostsResponse = yield* call(allPostsApi.getAllPosts);

    if (respose) {
      const mergedPosts = mergePosts(respose.results);
      yield put(setRatings(mergedPosts));
      yield put(setPreview(mergedPosts));
      yield put(getAllPostsSuccess({ posts: mergedPosts }));
    } else {
      yield put(getAllPostsFailure({ error: 'Mocked error message' }));
    }
  });
}

function mergePosts(postsFromApi: AllPostsResponseResult[]): PostCardModel[] {
  return postsFromApi.map((element) => {
    return {
      id: element.id,
      image: element.image,
      text: element.text,
      date: element.date,
      lesson_num: element.lesson_num,
      likes_amount: Math.floor(Math.random() * 1000),
      dislikes_amount: Math.floor(Math.random() * 1000),
      user_choice: generateUserChoice(),
      isFavorite: !!Math.floor(Math.random() * 2),
      title: element.title,
      author: element.author,
    };
  });
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
