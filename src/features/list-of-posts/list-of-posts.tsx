import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { MiddlePostCard } from '../../ui/post_card/middle_post_card/middle_post_card';
import { PostCardModel } from '../../ui/post_card/post-card.model';
import { SmallPostCard } from '../../ui/post_card/small_post_card/small_post_card';

type ListOfPostsProps = {
  postCards: PostCardModel[];
};

export const ListOfPosts: React.FC<ListOfPostsProps> = (
  props: ListOfPostsProps
) => {
  const getPostCardbyId = (id: number) =>
    props.postCards.find((item) => item.id === id);

  const getHalfOfCards = (part: 'left' | 'right'): number[] => {
    const identifiers = props.postCards.map((element) => element.id);
    const halfIndex = Math.ceil(props.postCards.length / 2);
    if (part === 'left') {
      return identifiers.slice(0, halfIndex);
    } else {
      return identifiers.slice(halfIndex);
    }
  };

  return (
    <ListOfPostsWrapper>
      <LeftWrapperOfPosts>
        {getHalfOfCards('left').map((element, id) => (
          <StyledLink key={id} to={`/posts/${element}`}>
            <MiddlePostCard
              key={id}
              postCard={getPostCardbyId(element)!}
            ></MiddlePostCard>
          </StyledLink>
        ))}
      </LeftWrapperOfPosts>
      <RightWrapperOfPosts>
        {getHalfOfCards('right').map((element, id) => (
          <StyledLink key={id} to={`/posts/${element}`}>
            <SmallPostCard
              key={id}
              postCard={getPostCardbyId(element)!}
            ></SmallPostCard>
          </StyledLink>
        ))}
      </RightWrapperOfPosts>
    </ListOfPostsWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: unset;
`;

const ListOfPostsWrapper = styled.div`
  display: flex;
  background-color: var(--background-primary-color);
  margin-bottom: 20px;
  width: 850px;
  justify-content: space-between;
  margin: auto;
`;
const LeftWrapperOfPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  justify-content: space-between;
`;
const RightWrapperOfPosts = styled.div`
  width: 295px;
`;
