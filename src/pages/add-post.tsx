import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';

export const AddPostPage: React.FC = () => {
  return (
    <MainTemplate
      header={<Header></Header>}
      backLink={<BackLink />}
      title={<Title>Success</Title>}
      body={<div>add post page</div>}
    />
  );
};
