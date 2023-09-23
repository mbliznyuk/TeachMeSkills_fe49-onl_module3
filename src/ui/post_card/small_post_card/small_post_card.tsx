import { styled } from 'styled-components';
import { PostCardModel } from '../post-card.model';
import { useState } from 'react';
import { LikeDislike } from '#features/like-dislike/like-dislike';
import { useAppDispatch } from '../../../hook';
import { showPreview } from '#features/post-image-preview/post-image-preview.slice';

type SmallPostCardProps = {
  postCard: PostCardModel;
};

export const SmallPostCard: React.FC<SmallPostCardProps> = (
  props: SmallPostCardProps
) => {
  const dispatch = useAppDispatch();
  const [isSaved, setIsSaved] = useState<boolean>(false);

  return (
    <SmallPostCardWrapper>
      <SmallMainWrapper>
        <SmallCardtextWrapper>
          <SmallPostCardDate>{props.postCard.date}</SmallPostCardDate>
          <SmallPostCardTitle>{props.postCard.title}</SmallPostCardTitle>
        </SmallCardtextWrapper>
        <SmallCardImageWrapper
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            dispatch(showPreview({ postId: props.postCard.id }));
          }}
        >
          <img src={props.postCard.image} alt="#"></img>
        </SmallCardImageWrapper>
      </SmallMainWrapper>
      <SmallIconWrapper
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        <LikeDislike postId={props.postCard.id}></LikeDislike>
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
