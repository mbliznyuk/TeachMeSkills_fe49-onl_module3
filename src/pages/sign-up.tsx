import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SignUpForm } from '#features/sign-up-form/sign-up-form';
import { Header } from '#features/header/header';

export const SignUp: React.FC = () => {
  return (
    <MainTemplate
      header={<Header isAuthorised={false}></Header>}
      backLink={<BackLink />}
      title={<Title>Sign Up</Title>}
      body={<SignUpForm />}
    />
  );
};
