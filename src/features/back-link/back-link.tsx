import styled from 'styled-components';

export const BackLink: React.FC = () => (
  <BackLinkWrapper>Back to home</BackLinkWrapper>
);

const BackLinkWrapper = styled.div`
  color: var(--text-primary-color);
  margin: 40px 40px 0 40px;
`;
