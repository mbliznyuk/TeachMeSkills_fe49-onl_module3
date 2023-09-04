import { useState } from 'react';
import { styled } from 'styled-components';
import { PostCardModel } from '../post-card.model';


type BigPostCardProps = {
  postCard: PostCardModel;
};

export const BigPostCard: React.FC<BigPostCardProps> = (
  props: BigPostCardProps
) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);
  const [amountOfLikes, setAmountOfLikes] = useState<number>(props.postCard.likes_amount);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  function dislike() {
    if(isLiked){
      setAmountOfLikes(amountOfLikes - 1)
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
    <BigPostCardWrapper>
      <MainWrapper>
        <CardtextWrapper>
          <PostCardDate>{props.postCard.date}</PostCardDate>
          <PostCardTitle>{props.postCard.title}</PostCardTitle>
          <PostCardText>{props.postCard.text}</PostCardText>
        </CardtextWrapper>
        <CardImageWrapper>
          <img src={props.postCard.image} alt="#"></img>
        </CardImageWrapper>
      </MainWrapper>
      <IconWrapper>
        <LikeWrapper>
          <LikeIcon onClick={like}> {isLiked ? <i className="fa-solid fa-thumbs-up"></i> :<i className="fa-regular fa-thumbs-up"></i>}</LikeIcon>
          <AmountOfLikes>{amountOfLikes}</AmountOfLikes>
          <DislikeIcon onClick={dislike}> {isDisliked ? <i className="fa-solid fa-thumbs-down"></i> : <i className="fa-regular fa-thumbs-down"></i>}</DislikeIcon>
        </LikeWrapper>
        <SaveIcoonWrapper>
          <BookmarkIcon onClick={() =>setIsSaved(!isSaved)}> {isSaved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}</BookmarkIcon>
          <i className="fa-solid fa-ellipsis"></i>
        </SaveIcoonWrapper>
      </IconWrapper>
    </BigPostCardWrapper>
  );
};

export const BigPostCardWrapper = styled.div`
  width: 610px;
  height: 325px;
  background-color: #f3f3f3;
  padding: 15px 20px;
  border-bottom: 1px solid #cfd0d1;
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardtextWrapper = styled.div`
width: 65%;

`;
export const PostCardDate = styled.div`
color: #8B8A90;
font-size: 14px;
line-height: 15px;
`;

export const PostCardTitle = styled.h2`
color: #403F44;
line-height: 30px;
font-size: 28px;
margin:10px 0;
`;

export const PostCardText = styled.div`
color: #8B8A90;
font-size: 16px;
margin-bottom: 15px;
height: 150px;
`;

export const CardImageWrapper = styled.div`
  width: 180px;
  height: 180px;
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
align-items: center;
height: 28px;
`;
const LikeWrapper = styled.div`
width: 13%;
display: flex;
justify-content: space-between;
font-size: 18px;
align-items: center;
`;
const AmountOfLikes = styled.div`
font-size: 16px;
margin-right: 10px;
`;
const SaveIcoonWrapper = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
font-size: 18px;
`;
const BookmarkIcon = styled.div`
display: flex;
justify-content: space-between;
font-size: 20px;
`;

const LikeIcon =styled.div`
font-size: 20px;
margin-right: 3px;
`;
const DislikeIcon = styled.div`
font-size: 20px;
`;
