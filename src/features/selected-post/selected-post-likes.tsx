import { toggleFavourite } from '#features/all-posts/all-posts.slice';
import {
  setActiveDislike,
  setActiveLike,
} from '#features/like-dislike/like-dislike.slice';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hook';

type Props = {
  postId: number;
};

export const SelectedPostLikes: React.FC<Props> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.likeDislike.records[postId]);
  const activeLike = rating.userChoice === 'like';
  const activeDislike = rating.userChoice === 'dislike';
  const { posts } = useAppSelector((state) => state.allPosts);

  const isPostFavorite: boolean =
    posts.find((element) => element.id === postId)?.isFavorite || false;
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
      <SaveIcoonWrapper>
        <BookmarkIcon
          onClick={(event) => dispatch(toggleFavourite({ postId }))}
        >
          {isPostFavorite ? (
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
  cursor: pointer;
  width: 80px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SaveIcoonWrapper = styled.div`
  width: 120px;
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  height: 30px;
  align-items: center;
  background-color: var(--background-accent-clor3);
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
  background-color: var(--background-accent-clor3);
  text-align: center;
  border-radius: 4px;
`;
const DislikeIcon = styled.div`
  font-size: 20px;
  margin-right: 3px;
  width: 40px;
  height: 30px;
  background-color: var(--background-accent-clor3);
  text-align: center;
  border-radius: 4px;
`;
