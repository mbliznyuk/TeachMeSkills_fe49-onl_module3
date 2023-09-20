import { useState } from 'react';
import { styled } from 'styled-components';

type Props = {
     postId: number; 
     likesAmount: number
 };


export const LikeDislike: React.FC<Props> = ({ likesAmount, postId }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);
  const [amountOfLikes, setAmountOfLikes] = useState<number>(likesAmount);
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
    <IconWrapper>
      <LikeWrapper>
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
      </LikeWrapper>
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`;
const LikeWrapper = styled.div`
  cursor: pointer;
  width: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;
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
