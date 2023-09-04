import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { styled } from 'styled-components';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormSubmited, setIsFormSubmited] = useState<boolean>(false);

  return (
    <FormWrapper>
      <Input
        placeholder="Your email"
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={!email && isFormSubmited ? `Email shoudn't be empty` : undefined}
      />
      <Input
        placeholder="Your password"
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <ForgotPasswordLinkWrapper>
        <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
      </ForgotPasswordLinkWrapper>
      <Button variant="primary" onClick={() => setIsFormSubmited(true)}>
        Sign In
      </Button>
      <LinkToSignUpFormWrapper>
        <SignUpFormText>Don't have an account? </SignUpFormText>
        <SignUpFormLink>SignUp</SignUpFormLink>
      </LinkToSignUpFormWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 40%;
  margin: auto;
  margin-top: 30px;
  padding: 35px;
  border: 1px solid var(--border-primary-color);
`;

const ForgotPasswordLinkWrapper = styled.div`
  margin-bottom: 25px;
`;
const ForgotPasswordLink = styled.a`
  all: unset;
  cursor: pointer;
`;

const LinkToSignUpFormWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SignUpFormText = styled.span``;

const SignUpFormLink = styled.a`
  all: unset;
  color: blue;
`;
