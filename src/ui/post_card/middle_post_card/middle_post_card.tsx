import { styled } from 'styled-components';
import { PostCardModel } from '../post-card.model';
import { useState } from 'react';

type MiddlePostCardProps = {
  postCard: PostCardModel;
};

export const MiddlePostCard: React.FC<MiddlePostCardProps> = (
  props: MiddlePostCardProps
) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);
  const [amountOfLikes, setAmountOfLikes] = useState<number>(
    props.postCard.likes_amount
  );
  const [isSaved, setIsSaved] = useState<boolean>(false);

  function dislike() {
    if (isLiked) {
      setAmountOfLikes(amountOfLikes - 1);
    }
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  }
  function like() {
    setIsLiked(!isLiked);
    setIsDisliked(false);
    setAmountOfLikes(isLiked ? amountOfLikes - 1 : amountOfLikes + 1);
  }
  return (
    <MiddlePostCardWrapper>
      <MainWrapper>
        <CardImageWrapper>
          <img src={props.postCard.image} alt="#"></img>
        </CardImageWrapper>
        <PostCardDate>{props.postCard.date}</PostCardDate>
        <PostCardTitle>{props.postCard.title}</PostCardTitle>
      </MainWrapper>
      <IconWrapper>
        <LikeWrapper>
          <LikeIcon onClick={() => like()}>
            {isLiked ? (
              <i className="fa-solid fa-thumbs-up"></i>
            ) : (
              <i className="fa-regular fa-thumbs-up"></i>
            )}
          </LikeIcon>
          <AmountOfLikes>{amountOfLikes}</AmountOfLikes>
          <DislikeIcon onClick={() => dislike()}>
            {isDisliked ? (
              <i className="fa-solid fa-thumbs-down"></i>
            ) : (
              <i className="fa-regular fa-thumbs-down"></i>
            )}
          </DislikeIcon>
        </LikeWrapper>
        <SaveIcoonWrapper>
          <BookmarkIcon onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <i className="fa-solid fa-bookmark"></i>
            ) : (
              <i className="fa-regular fa-bookmark"></i>
            )}
          </BookmarkIcon>
          <i className="fa-solid fa-ellipsis"></i>
        </SaveIcoonWrapper>
      </IconWrapper>
    </MiddlePostCardWrapper>
  );
};

const MiddlePostCardWrapper = styled.div`
  width: 250px;
  background-color: var(--background-primary-color);
  padding: 10px;
  border-bottom: 1px solid var(--border-primary-color);
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostCardDate = styled.div`
  color: #8b8a90;
  font-size: 14px;
  line-height: 16px;
`;

const PostCardTitle = styled.h2`
  color:var(--text-primary-color);
  font-size: 16px;
  margin: 10px 0;
  line-height: 20px;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 130px;
  margin: auto;
  margin-bottom: 15px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  align-items: center;
`;

const LikeWrapper = styled.div`
  cursor: pointer;
  width: 25%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const SaveIcoonWrapper = styled.div`
  cursor: pointer;
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: var(--border-accent-color);
`;

const BookmarkIcon = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const LikeIcon = styled.div`
  font-size: 18px;
  margin-right: 3px;
  color: var(--border-accent-color);
`;
const DislikeIcon = styled.div`
  font-size: 18px;
  color: var(--border-accent-color);
`;

const AmountOfLikes = styled.div`
  font-size: 16px;
  margin-right: 10px;
  color: var(--border-accent-color);
`;
