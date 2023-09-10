import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterDelimiter />
      <Year>{new Date().getFullYear()}</Year>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
`;

const FooterDelimiter = styled.hr`
  width: 100%;
`;

const Year = styled.div``;
