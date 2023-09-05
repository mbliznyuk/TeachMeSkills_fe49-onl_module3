import styled from 'styled-components';

type Props = {
  header: React.ReactNode;
  backLink: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  children?: never;
};

export const MainTemplate: React.FC<Props> = ({
  header,
  backLink,
  title,
  body,
}) => {
  return (
    <MainTemplateWrapper>
      {header}
      <ContentWithPaddings>
        <Main>
          <BackLinkContainer>{backLink}</BackLinkContainer>
          <TitleContainer>{title}</TitleContainer>
          <BodyContainer>{body}</BodyContainer>
        </Main>
        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
          
        </Footer>
      </ContentWithPaddings>
    </MainTemplateWrapper>
  );
};

const MainTemplateWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  background-color: var(--background-primary-color);
`;

const ContentWithPaddings = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  margin: auto;
`;

const BackLinkContainer = styled.div`
  width: 100%;
  text-align: start;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: start;
`;

const BodyContainer = styled.div`

`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
`;

const FooterDelimiter = styled.hr`
  width: 100%;
`;

const Year = styled.div``;
