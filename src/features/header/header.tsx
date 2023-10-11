import { BurgerMenu } from '#features/burger-menu/burger-menu';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hook';
import { UserNameLabel } from '../../ui/username-label/username-label';
import { toggle } from './is-burger-open.slice';
import { Search } from './search';
import { getProfile } from './username.slice';

type Props = {
  isOnlyGuestPage?: boolean;
};

export const Header: React.FC<Props> = ({ isOnlyGuestPage }) => {
  const dispatch = useAppDispatch();
  const { isBurgerOpen } = useAppSelector((state) => state.burgerMenu);
  const { profile, isCompleted } = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (!isOnlyGuestPage) {
      dispatch(getProfile());
    }
  }, [dispatch, isOnlyGuestPage]);

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
        {isCompleted ? (
          <UserNameLabel username={profile.username}></UserNameLabel>
        ) : (
          <UserIcon>
            <FontAwesomeIcon icon={faUser} />
          </UserIcon>
        )}
      </HeaderWrapper>
      <div style={{ display: isBurgerOpen ? 'inherit' : 'none' }}>
        <BurgerMenu
          isAuthorised={isCompleted}
          username={profile.username}
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
