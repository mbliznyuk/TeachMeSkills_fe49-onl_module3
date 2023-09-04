import styled from 'styled-components';

type Props = {
    previousPostTitle?: string;
    nextPostTitle?: string;
};

export const PostNavigationFooter: React.FC<Props> = ({previousPostTitle, nextPostTitle }) => {
  return (
    <PostNavigationFooterWrapper>
      <PreviousPostNavigationWrapper>
        <PreviousIcon>
          <i className="fa-solid fa-arrow-left"></i>
        </PreviousIcon>
        <PreviousTextWrapper>
          <PreviousText>Previous</PreviousText>
          <PreviousPostTitle>{previousPostTitle}</PreviousPostTitle>
        </PreviousTextWrapper>
      </PreviousPostNavigationWrapper>
      <NexPostNavigationWrapper>
        <NextTextWrapper>
          <NextText>Next</NextText>
          <NextPostTitle>{nextPostTitle}</NextPostTitle>
        </NextTextWrapper>
        <NextIcon>
          <i className="fa-solid fa-arrow-right-long"></i>
        </NextIcon>
      </NexPostNavigationWrapper>
    </PostNavigationFooterWrapper>
  );
};

const PostNavigationFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--border-primary-color);
`;

const NexPostNavigationWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 45%;
`;

const PreviousPostNavigationWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 45%;
`;

const NextTextWrapper = styled.div``;
const NextText = styled.div``;
const NextPostTitle = styled.div`
font-size:12px;
`;
const PreviousPostTitle = styled.div`
font-size:12px;
`;
const PreviousText = styled.div``;
const PreviousTextWrapper = styled.div``;

const NextIcon = styled.div``;

const PreviousIcon = styled.div``;
