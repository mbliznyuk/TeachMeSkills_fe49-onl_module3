import { BackLink } from '#features/back-link/back-link';
import { Header } from '#features/header/header';
import { RegistrationConfirmationForm } from '#features/registration-confirmation-form/registration-confirmation-form';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';

export const RegistrationSuccess: React.FC = () => {
  return (
    <MainTemplate
      header={<Header isAuthorised={false}></Header>}
      backLink={<BackLink />}
      title={<Title>Registration Confirmation</Title>}
      body={<RegistrationConfirmationForm />}
    />
  );
};
