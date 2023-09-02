import { styled } from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #EAEAEA;
  margin-bottom: 30px;
`;

export const Tab = styled.button<{isSelected: boolean}>`
  all: unset;
  color: black;
  font-size: 24px;
  font-weight: 600;
  margin: 0 30px;
  padding: 15px 15px;
  border-bottom: 3px solid;
  border-color: ${({isSelected}) =>(isSelected ? '#424147' : 'transparent')};
  cursor: pointer;
  &:hover {
    color: #2436A7;
  }

  &:disabled{
    color: gray;
    cursor: auto;
  }
`;
