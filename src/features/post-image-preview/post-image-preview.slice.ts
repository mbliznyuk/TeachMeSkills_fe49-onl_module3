import { createSlice } from '@reduxjs/toolkit';
import { mockedPostCardModels } from '../../mocked-data';

type PostImageInfo = {
  postId: number;
  imageUrl?: string;
};

type Payload = {
  postId: number;
};

const initialValues: PostImageInfo[] = mockedPostCardModels.map((element) => {
  return { postId: element.id, imageUrl: element.image };
});

const showPreviewSlice = createSlice({
  name: 'showPreview',
  initialState: {
    isPreviewShown: false,
    postsPayloads: initialValues,
    shownPostImage: initialValues[0].imageUrl,
  },
  reducers: {
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
  actions: { showPreview, clearPreview },
  reducer: showPreviewReducer,
} = showPreviewSlice;
