import { useState } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setActiveDislike, setActiveLike } from './like-dislike.slice';

type Props = {
  postId: number;
};

export const LikeDislike: React.FC<Props> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.likeDislike[postId]);
  const activeLike = rating.userChoice === 'like';
  const activeDislike = rating.userChoice === 'dislike';

  return (
    <IconWrapper>
      <LikeWrapper>
        <LikeIcon
          onClick={() => {
            dispatch(setActiveLike({ postId }));
          }}
        >
          {activeLike ? (
            <i className="fa-solid fa-thumbs-up"></i>
          ) : (
            <i className="fa-regular fa-thumbs-up"></i>
          )}
        </LikeIcon>
        <AmountOfLikes>{rating.likes}</AmountOfLikes>
        <DislikeIcon
          onClick={() => {
            dispatch(setActiveDislike({ postId }));
          }}
        >
          {activeDislike ? (
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
