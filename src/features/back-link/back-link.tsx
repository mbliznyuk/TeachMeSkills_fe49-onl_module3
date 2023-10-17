import { ThemeSwitcher } from '#features/theme-switcher/theme-switcher';
import styled from 'styled-components';

export const BackLink: React.FC = () => (
  <BackLinkWrapper>
    <BackLinkText>Back to home</BackLinkText>
    <ThemeSwitcher></ThemeSwitcher>
    </BackLinkWrapper>
);

const BackLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackLinkText = styled.div`
color: var(--text-primary-color);
  margin: 40px 20px 0 20px;
`;