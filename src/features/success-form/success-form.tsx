import { Button } from '#ui/button';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const SuccessForm: React.FC = () => {
  return (
    <SuccessFormWrapper>
      <SuccessFormTextWrapper>
        <SuccessFormText>Email confirmed</SuccessFormText>
        <SuccessFormText>Your registration has been completed</SuccessFormText>
      </SuccessFormTextWrapper>
      <StyledLink to={'/'}>
        <Button variant="primary" onClick={() => {}}>
          Go to home
        </Button>
      </StyledLink>
    </SuccessFormWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: unset;
`;

const SuccessFormWrapper = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 30px;
  padding: 35px;
  border: 1px solid var(--border-primary-color);
`;
const SuccessFormTextWrapper = styled.div`
  margin-bottom: 35px;
  color: var(--text-primary-color);
`;
const SuccessFormText = styled.div`
  line-height: 30px;
  font-size: 20px;
`;
