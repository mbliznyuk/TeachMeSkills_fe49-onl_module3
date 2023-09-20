import styled from 'styled-components';

export const BackLink: React.FC = () => (
  <BackLinkWrapper>Back to home</BackLinkWrapper>
);

const BackLinkWrapper = styled.div`
  color: var(--text-primary-color);
  margin: 40px 20px 0 20px;
`;
