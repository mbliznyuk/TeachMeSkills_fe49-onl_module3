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
        <CardImageWrapper>
          <img src={props.postCard.image} alt="#"></img>
        </CardImageWrapper>
        <CardtextWrapper>
          <PostCardDate>{props.postCard.date}</PostCardDate>
          <PostCardTitle>{props.postCard.title}</PostCardTitle>
        </CardtextWrapper>
      </MainWrapper>
      <DefaultPostLikes
        likesAmount={props.postCard.likes_amount}
      ></DefaultPostLikes>
    </PostCardWrapper>
  );
};

const PostCardWrapper = styled.div`
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
const CardtextWrapper = styled.div`
  width: 73%;
`;
const PostCardDate = styled.div`
  color: #8b8a90;
  font-size: 14px;
  height: 16px;
`;

const PostCardTitle = styled.h2`
  color: var(--text-primary-color);
  line-height: 16px;
  font-size: 16px;
  margin: 10px 0;
`;

const CardImageWrapper = styled.div`
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
