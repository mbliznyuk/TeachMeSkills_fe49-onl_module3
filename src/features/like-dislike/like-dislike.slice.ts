import { createSlice } from '@reduxjs/toolkit';

type Payload ={
    id: number;
}
type Rating = {
    likes: 10, dislikes: 5, userChoise: true
}
// type State = {
//   isLiked: string;
//   isDisliked: string;
//   amountOfLikes: string;
// };

const likeDislikeSlice = createSlice({
  name: 'LikeDislike',
  initialState: {
      1: { likes: 10, dislikes: 5, userChoise: true, },
      2: { likes: 15, dislikes: 7, userChoise: false, },
      3: { likes: 25, dislikes: 6, userChoise: true, },
  } as unknown as Record<number, Rating>,
  reducers: {
    setIsLiked(state, action:  { payload: Payload }) {
        const data = state[action.payload.id]
        if (!data) return;
        data.likes++;
    },
  },
});
