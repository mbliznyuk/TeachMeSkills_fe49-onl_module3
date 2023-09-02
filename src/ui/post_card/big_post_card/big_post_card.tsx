import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { PostCardModel } from '../post-card.model';
import {
  AmountOfLikes,
  BigPostCardWrapper,
  BookmarkIcon,
  CardImageWrapper,
  CardtextWrapper,
  IconWrapper,
  LikeWrapper,
  MainWrapper,
  PostCardDate,
  PostCardText,
  PostCardTitle,
  SaveIcoonWrapper,
} from './big_post_card.styles';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faThumbsUp, faThumbsDown);

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
          <FontAwesomeIcon
          
            icon={faThumbsUp}
            color={isLiked ? 'black' : 'white'}
            onClick={like}
          />
          <AmountOfLikes>{amountOfLikes}</AmountOfLikes>
          <FontAwesomeIcon
            icon={['fas', 'thumbs-up']}
            color={isDisliked ? 'black' : 'white'}
            onClick={dislike}
          />
        </LikeWrapper>
        <SaveIcoonWrapper>
          <BookmarkIcon onClick={() =>setIsSaved(!isSaved)}> {isSaved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}</BookmarkIcon>
          {/* <FontAwesomeIcon icon={faBookmark} color={isSaved ? 'black' : 'white'} onClick={() =>setIsSaved(!isSaved)}/> */}   
          <i className="fa-solid fa-ellipsis"></i>
        </SaveIcoonWrapper>
      </IconWrapper>
    </BigPostCardWrapper>
  );
};
