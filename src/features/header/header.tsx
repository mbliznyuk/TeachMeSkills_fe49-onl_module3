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
            <FontAwesomeIcon icon={faUser} />
          </UserIcon>
        )}
      </HeaderWrapper>
      <UserNameLabelWrapper>
        {isBurgerOpen &&
          usersList.map((element) => (
            <UserNameLabel
              username={element}
              styles={bottomUsernameLabelStyle}
            ></UserNameLabel>
          ))}
      </UserNameLabelWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  background-color: #2536a7;
  height: 60px;
  display: flex;
  position: relative;
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
  font-size: 18px;
`;

const UserIcon = styled.div`
  width: 40px;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserNameLabelWrapper = styled.div`
  z-index: 5;
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const bottomUsernameLabelStyle: CSSProperties = {
  borderTop: '1px solid #5463CA',
  zIndex: '10',
  width: '170px',
};