import styled from 'styled-components';
import { AllPostsResponseResult } from '../../api/types';

type DropDownProps = {
  posts: AllPostsResponseResult[];
};

export const DropDown: React.FC<DropDownProps> = ({ posts }) => {
  return (
    <DropDownWrapper>
      {posts.map((element) => (
        <DropDownElement>{element.title}</DropDownElement>
      ))}
    </DropDownWrapper>
  );
};

const DropDownWrapper = styled.ul``;

const DropDownElement = styled.li``;
