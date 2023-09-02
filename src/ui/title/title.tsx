import styled from 'styled-components';

type Props = {
  children: string;
};

export const Title: React.FC<Props> = ({ children }) => (
  <TitleWrapper>{children}</TitleWrapper>
);

const TitleWrapper = styled.h1`
  line-height: 50px;
  font-size: 40px;
  margin: 40px;
  color: var(--text-primary-color);
`;
