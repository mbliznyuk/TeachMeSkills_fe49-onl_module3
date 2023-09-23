import { AllPosts } from '#features/all-posts/all-posts-body';
import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import {
  mockedCurrentUsername,
  mockedPostCardModels,
  mockedTabsModels,
  mockedUsernames,
} from '../mocked-data';
import { useEffect } from 'react';
import {
  getAllPosts,
  getAllPostsSuccess,
} from '#features/all-posts/all-posts.slice';
import { useAppDispatch, useAppSelector } from '../hook';
import { PostImagePreview } from '#features/post-image-preview/post-image-preview';

export const AllPostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isPreviewShown } = useAppSelector((state) => state.postImagePreview);
  const { posts, isLoading } = useAppSelector(({ allPosts }) => allPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(
      () => dispatch(getAllPostsSuccess({ posts: mockedPostCardModels })),
      2000
    );
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (posts.length === 0) {
    return <div>Постов нет</div>;
  }

  return (
    <>
      <PostImagePreview isDialogOpen={isPreviewShown}></PostImagePreview>

      <MainTemplate
        header={
          <Header
            usersList={mockedUsernames}
            username={mockedCurrentUsername}
            isAuthorised={true}
          ></Header>
        }
        backLink={<BackLink />}
        title={<Title>Blog</Title>}
        body={<AllPosts postCards={posts} tabs={mockedTabsModels} />}
      />
    </>
  );
};
