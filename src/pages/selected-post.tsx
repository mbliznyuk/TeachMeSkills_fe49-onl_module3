import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { SelectedPost } from '#features/selected-post/selected-post-body';
import { PostCardModel } from '#ui/post_card/post-card.model';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { postCardModels } from '../mocked-data';

type SelectedPostProps = {
  selectedPost: PostCardModel;
};

export const SelectedPostPage: React.FC<SelectedPostProps> = ({
  selectedPost,
}) => {
  return (
    <MainTemplate
      header={
        <Header
          usersList={['Artem Malkin', 'Maria Bliznyuk']}
          username="Maria Bliznyuk"
        ></Header>
      }
      backLink={<BackLink />}
      title={<Title>{selectedPost.title}</Title>}
      body={
        <SelectedPost
          previousPostTitle={postCardModels[2].title}
          nextPostTitle={postCardModels[4].title}
          postCard={postCardModels[3]}
        />
      }
    />
  );
};
