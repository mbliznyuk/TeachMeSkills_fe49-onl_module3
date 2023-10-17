import { styled } from 'styled-components';
import { PostCardModel } from '../post-card.model';
import { useState } from 'react';

type SmallPostCardProps = {
  postCard: PostCardModel;
};

export const SmallPostCard: React.FC<SmallPostCardProps> = (
  props: SmallPostCardProps
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
    <SmallPostCardWrapper>
      <SmallMainWrapper>
        <SmallCardtextWrapper>
          <SmallPostCardDate>{props.postCard.date}</SmallPostCardDate>
          <SmallPostCardTitle>{props.postCard.title}</SmallPostCardTitle>
        </SmallCardtextWrapper>
        <SmallCardImageWrapper>
          <img src={props.postCard.image} alt="#"></img>
        </SmallCardImageWrapper>
      </SmallMainWrapper>
      <SmallIconWrapper>
        <SmallLikeWrapper>
          <LikeIcon onClick={like}>
            {isLiked ? (
              <i className="fa-solid fa-thumbs-up"></i>
            ) : (
              <i className="fa-regular fa-thumbs-up"></i>
            )}
          </LikeIcon>
          <AmountOfLikes>{amountOfLikes}</AmountOfLikes>
          <DislikeIcon onClick={dislike}>
            {isDisliked ? (
              <i className="fa-solid fa-thumbs-down"></i>
            ) : (
              <i className="fa-regular fa-thumbs-down"></i>
            )}
          </DislikeIcon>
        </SmallLikeWrapper>
        <SmallSaveIcoonWrapper>
          <BookmarkIcon onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <i className="fa-solid fa-bookmark"></i>
            ) : (
              <i className="fa-regular fa-bookmark"></i>
            )}
          </BookmarkIcon>
          <i className="fa-solid fa-ellipsis"></i>
        </SmallSaveIcoonWrapper>
      </SmallIconWrapper>
    </SmallPostCardWrapper>
  );
};

const SmallPostCardWrapper = styled.div`
  width: 269px;
  background-color: var(--background-primary-color);
  padding: 10px 10px;
  border-bottom: 1px solid var(--border-primary-color);
`;
const SmallMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 60px;
  height: 60px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const SmallIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`;
const SmallLikeWrapper = styled.div`
  cursor: pointer;
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;
`;
const SmallSaveIcoonWrapper = styled.div`
  cursor: pointer;
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: var(--border-accent-color);
`;

const BookmarkIcon = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

const LikeIcon = styled.div`
  font-size: 16px;
  margin-right: 3px;
  color: var(--border-accent-color);
`;

const DislikeIcon = styled.div`
  font-size: 16px;
  color: var(--border-accent-color);
`;

const AmountOfLikes = styled.div`
  font-size: 12px;
  margin-right: 10px;
  color: var(--border-accent-color);
`;
