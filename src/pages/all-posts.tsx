import { AllPosts } from '#features/all-posts/all-posts-body';
import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { mockedCurrentUsername, mockedPostCardModels, mockedTabsModels, mockedUsernames } from '../mocked-data';



export const AllPostsPage: React.FC= () => {
  return (
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
      body={<AllPosts postCards={mockedPostCardModels} tabs={mockedTabsModels} />}
    />
  );
};
