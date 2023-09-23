import { createSlice } from '@reduxjs/toolkit';
import { PostCardModel } from '#ui/post_card/post-card.model';

const allPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    posts: [] as PostCardModel[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getAllPosts(state) {
      state.isLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: { posts: PostCardModel[] } }) {
      state.isLoading = false;
      state.posts = action.payload.posts;
    },
    getAllPostsFailure(state, error: { payload: unknown }) {
      state.isLoading = false;
      if (
        typeof error.payload === 'object' &&
        error.payload &&
        'message' in error.payload &&
        typeof error.payload.message === 'string'
      ) {
        state.error = { name: 'Error', message: error.payload.message };
      }
      state.error = { name: 'Error', message: String(error) };
    },
  },
});

export const {
  actions: { getAllPosts, getAllPostsSuccess, getAllPostsFailure },
  reducer: allPostsReducer,
} = allPostsSlice;
