import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties } from 'react';
import { UserNameLabel } from '../../ui/username-label/username-label';
import { Search } from './search';
import styled from 'styled-components';
import { BurgerMenu } from '#features/burger-menu/burger-menu';
import { useAppDispatch, useAppSelector } from '../../hook';
import { toggle } from './header.slice';

type BarProps = {
  username?: string;
  usersList: string[];
  isAuthorised: boolean;
};

export const Header: React.FC<BarProps> = ({
  username,
  usersList,
  isAuthorised,
}) => {
  const dispatch = useAppDispatch();
  const { isBurgerOpen } = useAppSelector((state) => state.burgerMenu);
  console.log(toggle());
  return (
    <>
      <HeaderWrapper>
        <Burger onClick={(event) => dispatch(toggle())}>
          {isBurgerOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </Burger>
        <Search></Search>
        {isAuthorised ? (
          <UserNameLabel username={username!}></UserNameLabel>
        ) : (
          <UserIcon>
            <FontAwesomeIcon icon={faUser} />
          </UserIcon>
        )}
      </HeaderWrapper>
      <div style={{ display: isBurgerOpen ? 'inherit' : 'none' }}>
        <BurgerMenu
          isAuthorised={isAuthorised}
          username={username}
        ></BurgerMenu>
      </div>
    </>
  );
};

const HeaderWrapper = styled.div`
  background-color: #2536a7;
  height: 50px;
  display: flex;
  position: relative;
`;

const Burger = styled.div`
  width: 30px;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #5463ca;
  cursor: pointer;
  font-size: 16px;
`;

const UserIcon = styled.div`
  width: 30px;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// TODO: remove
const bottomUsernameLabelStyle: CSSProperties = {
  borderTop: '1px solid #5463CA',
  zIndex: '10',
  width: '150px',
  height: '30px',
};
