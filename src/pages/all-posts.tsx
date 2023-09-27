import { AllPosts } from '#features/all-posts/all-posts-body';
import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import {
  mockedCurrentUsername,
  mockedPostCardModels,
  mockedTabsModels,
} from '../mocked-data';
import { useEffect } from 'react';
import {
  getAllPosts,
  getAllPostsSuccess,
} from '#features/all-posts/all-posts.slice';
import { useAppDispatch, useAppSelector } from '../hook';
import { PostImagePreview } from '#features/post-image-preview/post-image-preview';
import { PostCardModel } from '#ui/post_card/post-card.model';
import {
  ALL_TABS_KEY,
  FAVOURITES_TABS_KEY,
  POPULAR_TABS_KEY,
} from '#ui/tabs/tab.slice';

export const AllPostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isPreviewShown } = useAppSelector((state) => state.postImagePreview);
  const { activeTab } = useAppSelector((state) => state.tabs);
  const { posts, favoritePosts, isLoading, popularPosts } = useAppSelector(
    ({ allPosts }) => allPosts
  );

  const getCurrentPosts = (): PostCardModel[] => {
    switch (activeTab) {
      case ALL_TABS_KEY:
        return posts;
      case FAVOURITES_TABS_KEY:
        return favoritePosts;
      case POPULAR_TABS_KEY:
        return popularPosts;
      default:
        return posts;
    }
  };

  console.log('getAllPosts in page'); // TODO remove
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAllPostsSuccess({ posts: mockedPostCardModels }));
  // }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (posts.length === 0) {
    return <div>No posts</div>;
  }

  return (
    <>
      <PostImagePreview isDialogOpen={isPreviewShown}></PostImagePreview>

      <MainTemplate
        header={
          <Header username={mockedCurrentUsername} isAuthorised={true}></Header>
        }
        backLink={<BackLink />}
        title={<Title>Blog</Title>}
        body={
          <AllPosts postCards={getCurrentPosts()} tabs={mockedTabsModels} />
        }
      />
    </>
  );
};
