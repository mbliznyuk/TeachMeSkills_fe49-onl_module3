import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

type Props = {
  isActive: boolean;
};
export const Search: React.FC<Props> = ({ isActive }) => {
  return (
    <>
      {isActive ? (
        <>
          <SearchInput placeholder="Search..."></SearchInput>
          <CloseInputIcon>
            <FontAwesomeIcon icon={faXmark} />
          </CloseInputIcon>
        </>
      ) : (
        <SearchInputAlternative></SearchInputAlternative>
      )}
      <SearchIconWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchIconWrapper>
    </>
  );
};

const SearchIconWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #5463ca;
  border-right: 1px solid #5463ca;
  font-size: 16px;
`;

const SearchInput = styled.input`
  width: 90%;
  background-color: #5463ca;
  outline: none;
  border: 1px solid transparent;
  padding: 0 15px;
  color: white;
  &::placeholder {
    color: white;
    opacity: 0.6;
  }
`;
const CloseInputIcon = styled.div`
  color: white;
  background-color: #5463ca;
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const SearchInputAlternative = styled.div`
  width: 92%;
  padding: 0 15px;
  background-color: #2536a7;
  border: 1px solid transparent;
`;
