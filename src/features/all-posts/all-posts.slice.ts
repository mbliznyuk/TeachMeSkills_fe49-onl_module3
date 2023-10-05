import { createSlice } from '@reduxjs/toolkit';
import { PostCardModel } from '#ui/post_card/post-card.model';

const allPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    posts: [] as PostCardModel[],
    favoritePosts: [] as PostCardModel[],
    popularPosts: [] as PostCardModel[],
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
      state.favoritePosts = action.payload.posts.filter(
        (element) => element.isFavorite
      );
      state.popularPosts = action.payload.posts.filter(
        (element) => element.likes_amount > 30
      );
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
    toggleFavourite(state, action: { payload: { postId: number } }) {
      const postToToggle = state.posts.find(
        (element) => element.id === action.payload.postId
      );
      if (!postToToggle) {
        return;
      }
      if (postToToggle.isFavorite) {
        const indexOfElementToRemove = state.favoritePosts.findIndex(
          (element) => element.id === action.payload.postId
        );
        state.favoritePosts.splice(indexOfElementToRemove, 1);
      } else {
        state.favoritePosts.push(postToToggle);
      }
      postToToggle.isFavorite = !postToToggle.isFavorite;
    },
  },
});

export const {
  actions: {
    getAllPosts,
    getAllPostsSuccess,
    getAllPostsFailure,
    toggleFavourite,
  },
  reducer: allPostsReducer,
} = allPostsSlice;
