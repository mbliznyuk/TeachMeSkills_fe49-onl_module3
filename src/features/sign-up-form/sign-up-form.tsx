import { useEffect, useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import styled from 'styled-components';
import { setName } from './sign-up-form.slice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { register } from '#features/auth/registration.slice';
import { useNavigate } from 'react-router-dom';

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(({ signUpForm }) => signUpForm.name);
  const isCompleted = useAppSelector(
    ({ registration }) => registration.isCompleted
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isCompleted) {
      navigate('/add-post');
    }
  }, [isCompleted, navigate]);

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
        onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
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
      <Button
        variant="primary"
        onClick={() =>
          dispatch(
            register({
              username: name,
              password,
            })
          )
        }
      >
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
