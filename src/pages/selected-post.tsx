import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { SelectedPost } from '#features/selected-post/selected-post-body';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Navigate, useParams } from 'react-router-dom';
import { mockedPostCardModels } from '../mocked-data';
import { useAppDispatch, useAppSelector } from '../hook';
import { useEffect } from 'react';
import { getSelectedPost } from '#features/selected-post/selected-posts.slice';

export const SelectedPostPage: React.FC = () => {
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const { post, isLoading } = useAppSelector(
    ({ selectedPost }) => selectedPost
  );

  useEffect(() => {
    dispatch(getSelectedPost({ postId: postId! }));
  }, [dispatch, postId]);

  if (!Number.isFinite(Number(postId))) {
    return <Navigate to={'/'} />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post || Object.keys(post).length === 0) {
    return <Navigate to={'/'} />;
  }

  return (
    <MainTemplate
      header={<Header username="Maria Bliznyuk" isAuthorised={true}></Header>}
      backLink={<BackLink />}
      title={<Title>{post.title}</Title>}
      body={
        <SelectedPost
          previousPostTitle={mockedPostCardModels[2].title}
          nextPostTitle={mockedPostCardModels[4].title}
          postCard={post}
        />
      }
    />
  );
};
