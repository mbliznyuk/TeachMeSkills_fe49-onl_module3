import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { SelectedPost } from '#features/selected-post/selected-post-body';
import { PostCardModel } from '#ui/post_card/post-card.model';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Navigate, useParams } from 'react-router-dom';
import { mockedPostCardModels } from '../mocked-data';



export const SelectedPostPage: React.FC = () => {
  const {postId} = useParams()
  const numericPostId = Number(postId)
  if (!Number.isFinite(numericPostId)) {
    return <Navigate to={'/'}/>
  }
  const selectedPost = mockedPostCardModels.find(element => element.id === numericPostId)
  if(!selectedPost) {
    return <Navigate to={'/'}/>
  }
  return (
    <MainTemplate
      header={
        <Header
          usersList={['Artem Malkin', 'Maria Bliznyuk']}
          username="Maria Bliznyuk"
          isAuthorised={true}
        ></Header>
      }
      backLink={<BackLink />}
      title={<Title>{selectedPost.title}</Title>}
      body={
        <SelectedPost
          previousPostTitle={mockedPostCardModels[2].title}
          nextPostTitle={mockedPostCardModels[4].title}
          postCard={selectedPost}
        />
      }
    />
  );
};
