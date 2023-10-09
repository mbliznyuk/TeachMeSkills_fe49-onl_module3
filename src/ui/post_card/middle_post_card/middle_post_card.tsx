import { LikeDislike } from '#features/like-dislike/like-dislike';
import { showPreview } from '#features/post-image-preview/post-image-preview.slice';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch } from '../../../hook';
import { PostCardModel } from '../post-card.model';
import { FavoritePostIcon } from '#features/favorite-icon/favorite-icon';

type MiddlePostCardProps = {
  postCard: PostCardModel;
};

export const MiddlePostCard: React.FC<MiddlePostCardProps> = (
  props: MiddlePostCardProps
) => {
  const dispatch = useAppDispatch();

  return (
    <MiddlePostCardWrapper>
      <MainWrapper>
        <CardImageWrapper
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            dispatch(showPreview({ postId: props.postCard.id }));
          }}
        >
          <img src={props.postCard.image} alt="#"></img>
        </CardImageWrapper>
        <PostCardDate>{props.postCard.date}</PostCardDate>
        <PostCardTitle>{props.postCard.title}</PostCardTitle>
      </MainWrapper>
      <IconWrapper
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        <LikeDislike postId={props.postCard.id}></LikeDislike>
        <SaveIcoonWrapper>
          <FavoritePostIcon postId={props.postCard.id}></FavoritePostIcon>
          <i className="fa-solid fa-ellipsis"></i>
        </SaveIcoonWrapper>
      </IconWrapper>
    </MiddlePostCardWrapper>
  );
};

const MiddlePostCardWrapper = styled.div`
  width: 250px;
  background-color: var(--background-primary-color);
  padding: 12px;
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
  line-height: 18px;
`;

const PostCardTitle = styled.h2`
  color: var(--text-primary-color);
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
