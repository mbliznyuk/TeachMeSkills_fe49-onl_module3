import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { SuccessForm } from '#features/success-form/success-form';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';

export const Success: React.FC = () => {
  return (
    <MainTemplate
      header={<Header isAuthorised={true}></Header>}
      backLink={<BackLink />}
      title={<Title>Success</Title>}
      body={<SuccessForm />}
    />
  );
};
