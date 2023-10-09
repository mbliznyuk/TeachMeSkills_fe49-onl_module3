import { UserChoice } from '#ui/post_card/post-card.model';
import { createSlice } from '@reduxjs/toolkit';
import { mockedPostCardModels } from '../../mocked-data';

type Payload = {
  postId: number;
};

type Rating = {
  likes: number;
  dislikes: number;
  userChoice: UserChoice;
};

const objRemoveMe = mockedPostCardModels.reduce((accumulator, value, index) => {
  return {
    ...accumulator,
    [value.id]: {
      likes: value.likes_amount,
      dislikes: value.dislikes_amount,
      userChoice: value.user_choice,
    } as Rating,
  };
}, {});

//TODO fix unLike and unDislike
export const likeDislike = createSlice({
  name: 'likeDislike',
  initialState: objRemoveMe as Record<number, Rating>,
  reducers: {
    setActiveLike(state, action: { payload: Payload }) {
      const data = state[action.payload.postId];
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
      const data = state[action.payload.postId];
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
  actions: { setActiveLike, setActiveDislike },
  reducer: likeDislikeReducer,
} = likeDislike;
