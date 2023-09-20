import { Button } from '#ui/button';
import { UserNameLabel } from '#ui/username-label/username-label';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type BurgerMenuProps = {
  username?: string;
  isAuthorised: boolean;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  username,
  isAuthorised,
}) => {
    const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark', isDark);
  }, [isDark]);
  return (
    <BurgerMenuWrapper>
      <BurgerMenuTopWrapper>
        {isAuthorised && <UserNameLabel username={username!}></UserNameLabel>}
       <StyledLink to={'/'}> <Button
          variant={'default'}
          children={'Home'}
           onClick={() => console.log('gg')}
        ></Button></StyledLink>
        {isAuthorised && (
         <StyledLink to={'/add-post'}> <Button
            variant={'default'}
            children={'Add Post'}
            onClick={() => {
              console.log('dd');
            }}
          ></Button></StyledLink>
        )}
      </BurgerMenuTopWrapper>
      <BurgerMenuBottomWrapper>
        <ThemeSwitcherWrapper>
          <ThemeSwitcherLight onClick={() => setIsDark(false)}>
            <i className="fa-regular fa-sun" style={{color: isDark? '#b7b7b7' : '#313037' }}></i>
          </ThemeSwitcherLight>
          <ThemeSwitcherDark onClick={() => setIsDark(true)}>
            <i className="fa-regular fa-moon" style={{color: isDark? '#313037' : '#b7b7b7'}}></i>
          </ThemeSwitcherDark>
        </ThemeSwitcherWrapper>
        {isAuthorised ? (
          <StyledLink to={'/'}><Button
            variant={'secondary'}
            children={'Log Out'}
            onClick={() => {
              console.log('hh');
            }}
          ></Button></StyledLink>
        ) : (
          <StyledLink to={'/sign-in'}><Button
            variant={'secondary'}
            children={'Sign In'}
            onClick={() => {
              console.log('mm');
            }}
          ></Button></StyledLink>
        )}
      </BurgerMenuBottomWrapper>
    </BurgerMenuWrapper>
  );
};

const StyledLink = styled(Link)`
text-decoration: unset;
`; 
const BurgerMenuWrapper = styled.div`
  min-width: 180px;
  min-height: 80dvh;
  background-color: var(--background-burger-color);
  z-index: 5;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-top: 1px solid #5463ca;
`;

const BurgerMenuTopWrapper = styled.div``;

const BurgerMenuBottomWrapper = styled.div``;

const ThemeSwitcherWrapper = styled.div`
  display: flex;
  border-top: 1px solid var(--border-primary-color);
  height: 52px;
`;
const ThemeSwitcherDark = styled.button`
  all: unset;
  cursor: pointer;
  width: 50%;
  text-align: center;
  font-size: 22px;
`;

const ThemeSwitcherLight = styled.button`
  all: unset;
  text-align: center;
  cursor: pointer;
  width: 50%;
  font-size: 22px;
  border-right: 1px solid var(--border-primary-color);
`;
