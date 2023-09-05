import { AllPosts } from '#features/all-posts/all-posts-body';
import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { postCardModels, tabsModels } from '../mocked-data';

type AllPostsProps = {};

export const AllPostsPage: React.FC<AllPostsProps> = () => {
  return (
    <MainTemplate
      header={
        <Header
          usersList={['Artem Malkin', 'Maria Bliznyuk']}
          username="Maria Bliznyuk"
        ></Header>
      }
      backLink={<BackLink />}
      title={<Title>Blog</Title>}
      body={<AllPosts postCards={postCardModels} tabs={tabsModels} />}
    />
  );
};
