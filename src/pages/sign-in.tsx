import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { SignInForm } from '#features/sign-in-form/sign-in-form';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';

export const SignIn: React.FC = () => {
  return (
    <MainTemplate
      header={<Header isOnlyGuestPage={true}></Header>}
      backLink={<BackLink />}
      title={<Title>Sign In</Title>}
      body={<SignInForm />}
    />
  );
};
