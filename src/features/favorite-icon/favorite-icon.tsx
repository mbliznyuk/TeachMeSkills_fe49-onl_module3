import { toggleFavourite } from '#features/all-posts/all-posts.slice';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hook';

type Props = {
  postId: number;
};

export const FavoritePostIcon: React.FC<Props> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.allPosts);

  const isPostFavorite: boolean =
    posts.find((element) => element.id === postId)?.isFavorite || false;

  return (
    <>
      <BookmarkIcon onClick={(event) => dispatch(toggleFavourite({ postId }))}>
        {isPostFavorite ? (
          <i className="fa-solid fa-bookmark"></i>
        ) : (
          <i className="fa-regular fa-bookmark"></i>
        )}
      </BookmarkIcon>
    </>
  );
};

const BookmarkIcon = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;
