import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import styled from 'styled-components';

export const SignUpForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const [isFormSubmited, setIsFormSubmited] = useState<boolean>(false);

    return (
    <FormWrapper>
      <Input
        type="text"
        labelText="Name"
        value={name}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={!email && isFormSubmited ? `Email shoudn't be empty` : undefined}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          setConfirmedPassword(currentTarget.value)
        }
      />
      <Button variant="primary" onClick={() => setIsFormSubmited(true)}>
        Sign Up
      </Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 30%;
  margin: auto;
  margin-top: 30px;
  padding: 35px;
  border: 1px solid var(--border-primary-color);
`;