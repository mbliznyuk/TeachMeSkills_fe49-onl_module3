import { allPostsReducer } from '#features/all-posts/all-posts.slice';
import { registrationReducer } from '#features/auth/registration.slice';
import { burgerOpenreducer } from '#features/header/header.slice';
import { likeDislikeReducer } from '#features/like-dislike/like-dislike.slice';
import { showPreviewReducer } from '#features/post-image-preview/post-image-preview.slice';
import { signUpFormSliceReducer } from '#features/sign-up-form/sign-up-form.slice';
import { TabsSliceReducer } from '#ui/tabs/tab.slice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { activationReducer } from '#features/auth/activation.slice';
import { authorisationReducer } from '#features/auth/authorisation.slice';
import { selectedPostReducer } from '#features/selected-post/selected-posts.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  reducer: {
    signUpForm: signUpFormSliceReducer,
    likeDislike: likeDislikeReducer,
    allPosts: allPostsReducer,
    burgerMenu: burgerOpenreducer,
    postImagePreview: showPreviewReducer,
    registration: registrationReducer,
    tabs: TabsSliceReducer,
    activation: activationReducer,
    authorisation: authorisationReducer,
    selectedPost: selectedPostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
