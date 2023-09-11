import styled from 'styled-components';

type Props = {};

export const AllPostsNavigationFooter: React.FC<Props> = () => {
  return (
    <PostNavigationFooterWrapper>
      <PreviousPostNavigationWrapper>
        <PreviousIcon>
          <i className="fa-solid fa-arrow-left"></i>
        </PreviousIcon>
        <PreviousText>Previous</PreviousText>
      </PreviousPostNavigationWrapper>
      <NexPostNavigationWrapper>
        <NextText>Next</NextText>

        <NextIcon>
          <i className="fa-solid fa-arrow-right-long"></i>
        </NextIcon>
      </NexPostNavigationWrapper>
    </PostNavigationFooterWrapper>
  );
};

const PostNavigationFooterWrapper = styled.div`
  display: flex;
  height: 72px;
  justify-content: space-between;
  align-items: center;
`;

const NexPostNavigationWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 45%;
  color: var(--text-primary-color);
  
  &:hover {
    color: var(--background-accent-color);
  }
`;

const PreviousPostNavigationWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 45%;
  color: var(--text-primary-color);

  &:hover {
    color: var(--background-accent-color);
  }
`;

const NextText = styled.div`
  margin-right: 15px;
  font-weight: bold;
`;
const PreviousText = styled.div`
  margin-left: 15px;
  font-weight: bold;
`;

const NextIcon = styled.div`
  font-size: 18px;
`;

const PreviousIcon = styled.div`
  font-size: 18px;
`;
