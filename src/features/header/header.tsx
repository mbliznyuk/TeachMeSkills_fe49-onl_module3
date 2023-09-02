import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties, useState } from 'react';
import { UserNameLabel } from '../../ui/username-label/username-label';
import { Search } from './search';
import styled from 'styled-components';

type BarProps = {
  username?: string;
  usersList: string[];
};

export const bottomUsernameLabelStyle: CSSProperties = {
  borderTop: '1px solid #5463CA',
};

export const Header: React.FC<BarProps> = ({ username, usersList }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderWrapper>
        <Burger onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
          {isBurgerOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </Burger>
        <Search isActive={!isBurgerOpen}></Search>
        {!!username ? (
          <UserNameLabel username={username}></UserNameLabel>
        ) : (
          <UserIcon>
            {' '}
            <FontAwesomeIcon icon={faUser} />
          </UserIcon>
        )}
      </HeaderWrapper>
      {isBurgerOpen &&
        usersList.map((element) => (
          <UserNameLabel
            username={element}
            styles={bottomUsernameLabelStyle}
          ></UserNameLabel>
        ))}
    </>
  );
};

const HeaderWrapper = styled.div`
  background-color: #2536a7;
  height: 60px;
  display: flex;
`;

const Burger = styled.div`
  width: 40px;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #5463ca;
  cursor: pointer;
`;

const UserIcon = styled.div`
  width: 40px;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
