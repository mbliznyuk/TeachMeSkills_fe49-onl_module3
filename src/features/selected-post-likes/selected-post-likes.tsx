import { useState } from 'react';
import { styled } from 'styled-components';

export const SelectedPostLikes: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  function dislike() {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  }
  function like() {
    setIsLiked(!isLiked);
    setIsDisliked(false);
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
            {/* <AmountOfLikes>{amountOfLikes}</AmountOfLikes> */}
            <DislikeIcon onClick={dislike}>
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
            <SavePostText>Add to favorite</SavePostText>
          </SaveIcoonWrapper>
        </IconWrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const LikeWrapper = styled.div`
  width: 80px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SaveIcoonWrapper = styled.div`
  width: 120px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  height: 30px;
  align-items: center;
  background-color: var(--background-accent-color);
  border-radius: 4px;
  text-align: center;
`;

const BookmarkIcon = styled.div`
  font-size: 20px;
  margin-right: 3px;
`;

const SavePostText = styled.span`
  font-size: 14px;
`;

const LikeIcon = styled.div`
  font-size: 20px;
  margin-right: 3px;
  width: 40px;
  height: 30px;
  background-color: var(--background-accent-color);
  text-align: center;
  border-radius: 4px;
`;
const DislikeIcon = styled.div`
  font-size: 20px;
  margin-right: 3px;
  width: 40px;
  height: 30px;
  background-color: var(--background-accent-color);
  text-align: center;
  border-radius: 4px;
`;
