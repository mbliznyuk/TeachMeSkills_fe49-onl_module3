import { PostCardModel } from '#ui/post_card/post-card.model';
import { createSlice } from '@reduxjs/toolkit';

type PostImageInfo = {
  postId: number;
  imageUrl?: string;
};

type Payload = {
  postId: number;
};

const mapToPreviews = (posts: PostCardModel[]): PostImageInfo[] => {
  return posts.map((element) => {
    return { postId: element.id, imageUrl: element.image };
  });
};
const showPreviewSlice = createSlice({
  name: 'showPreview',
  initialState: {
    postsPayloads: [] as PostImageInfo[],
    isPreviewShown: false,
    shownPostImage: '' as string | undefined,
  },
  reducers: {
    setPreview(state, action: { payload: PostCardModel[] }) {
      state.postsPayloads = mapToPreviews(action.payload);
    },
    showPreview(state, action: { payload: Payload }) {
      state.isPreviewShown = true;
      state.shownPostImage = state.postsPayloads.find(
        (element) => element.postId === action.payload.postId
      )?.imageUrl;
    },
    clearPreview(state) {
      state.isPreviewShown = false;
    },
  },
});

export const {
  actions: { setPreview, showPreview, clearPreview },
  reducer: showPreviewReducer,
} = showPreviewSlice;
