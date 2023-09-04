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
        <SmallCardImageWrapper><img src={props.postCard.image} alt='#'></img></SmallCardImageWrapper>
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
  width: 350px;
  background-color: #f3f3f3;
  padding: 10px 20px;
  border-bottom: 1px solid #cfd0d1;
  height: 157px;
`;
const SmallMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px; 
`;
const SmallCardtextWrapper = styled.div`
  width: 75%;
`;
const SmallPostCardDate = styled.div`
  color: #8b8a90;
  font-size: 16px;
  height: 18px;
`;

const SmallPostCardTitle = styled.h2`
  color: #403f44;
  line-height: 26px;
  font-size: 22px;
  margin: 10px 0;
`;

const SmallCardImageWrapper = styled.div`
  width: 80px;
  height: 80px;
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
  height: 26px;
`;
const SmallLikeWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
`;
const SmallSaveIcoonWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const BookmarkIcon = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const LikeIcon = styled.div`
  font-size: 20px;
  margin-right: 3px;
`;
const DislikeIcon = styled.div`
  font-size: 20px;
`;

const AmountOfLikes = styled.div`
  font-size: 16px;
  margin-right: 10px;
`;