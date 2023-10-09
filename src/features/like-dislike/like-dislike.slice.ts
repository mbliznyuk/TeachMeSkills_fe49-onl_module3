import { PostCardModel, UserChoice } from '#ui/post_card/post-card.model';
import { createSlice } from '@reduxjs/toolkit';

type Payload = {
  postId: number;
};

export type Rating = {
  likes: number;
  dislikes: number;
  userChoice: UserChoice;
};

const mapPostsToRatings = (posts: PostCardModel[]): Record<number, Rating> => {
  return posts.reduce((accumulator, value, index) => {
    return {
      ...accumulator,
      [value.id]: {
        likes: value.likes_amount,
        dislikes: value.dislikes_amount,
        userChoice: value.user_choice,
      } as Rating,
    };
  }, {});
};

export const likeDislike = createSlice({
  name: 'likeDislike',
  initialState: { records: {} as Record<number, Rating> },
  reducers: {
    setRatings(state, action: { payload: PostCardModel[] }) {
      state.records = mapPostsToRatings(action.payload);
    },
    setActiveLike(state, action: { payload: Payload }) {
      const data = state.records[action.payload.postId];
      if (!data) return;
      if (data.userChoice === 'like') {
        data.likes--;
        data.userChoice = null;
        return;
      }
      if (data.userChoice === 'dislike') {
        data.dislikes--;
      }
      data.likes++;
      data.userChoice = 'like';
    },
    setActiveDislike(state, action: { payload: Payload }) {
      const data = state.records[action.payload.postId];
      if (!data) return;
      if (data.userChoice === 'dislike') {
        data.dislikes--;
        data.userChoice = null;
        return;
      }
      if (data.userChoice === 'like') {
        data.likes--;
      }
      data.dislikes++;
      data.userChoice = 'dislike';
    },
  },
});

export const {
  actions: { setRatings, setActiveLike, setActiveDislike },
  reducer: likeDislikeReducer,
} = likeDislike;
