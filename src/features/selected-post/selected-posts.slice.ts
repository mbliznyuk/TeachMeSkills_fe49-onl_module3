import { createSlice } from '@reduxjs/toolkit';
import { PostCardModel } from '#ui/post_card/post-card.model';

export type SelectedPostPayload = {
  postId: string;
};

const selectedPostSlice = createSlice({
  name: 'SelectedPost',
  initialState: {
    post: {} as PostCardModel,
    isLoading: true,
    error: null as Error | null,
  },
  reducers: {
    getSelectedPost(state, action: { payload: SelectedPostPayload }) {
      state.isLoading = true;
    },
    getSelectedPostSuccess(
      state,
      action: { payload: { post: PostCardModel } }
    ) {
      state.isLoading = false;
      state.post = action.payload.post;
    },
    getSelectedPostsFailure(state, error: { payload: unknown }) {
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
  actions: { getSelectedPost, getSelectedPostSuccess, getSelectedPostsFailure },
  reducer: selectedPostReducer,
} = selectedPostSlice;
