import { DefaultPostLikes } from '#features/post-likes-panel/default-post-likes/default-post-likes';
import { styled } from 'styled-components';
import { PostCardModel } from '../post-card.model';

type SearchedPostCardProps = {
  postCard: PostCardModel;
};

export const SearchedPostCard: React.FC<SearchedPostCardProps> = (
  props: SearchedPostCardProps
) => {
  return (
    <PostCardWrapper>
      <MainWrapper>
        <SmallCardImageWrapper>
          <img src={props.postCard.image} alt="#"></img>
        </SmallCardImageWrapper>
        <SmallCardtextWrapper>
          <SmallPostCardDate>{props.postCard.date}</SmallPostCardDate>
          <SmallPostCardTitle>{props.postCard.title}</SmallPostCardTitle>
        </SmallCardtextWrapper>
      </MainWrapper>
      <DefaultPostLikes
        likesAmount={props.postCard.likes_amount}
      ></DefaultPostLikes>
    </PostCardWrapper>
  );
};

const PostCardWrapper = styled.div`
  width: 100%;
  margin: auto;
  background-color: var(--background-primary-color);
  padding: 10px 10px;
  border-bottom: 1px solid var(--border-primary-color);
`;
const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const SmallCardtextWrapper = styled.div`
  width: 73%;
`;
const SmallPostCardDate = styled.div`
  color: #8b8a90;
  font-size: 14px;
  height: 16px;
`;

const SmallPostCardTitle = styled.h2`
  color: var(--text-primary-color);
  line-height: 16px;
  font-size: 16px;
  margin: 10px 0;
`;

const SmallCardImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 25px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
