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

  const getPostCardbyId = (id: number) => props.postCards.find(item => (item.id === id))
  return (
    <ListOfPostsWrapper>
      <LeftWrapperOfPosts>
        {[1, 2, 9, 3, 4, 5].map((element, id) => <StyledLink key={id} to={`/posts/${element}`}><MiddlePostCard key={id} postCard={getPostCardbyId(element)!}></MiddlePostCard></StyledLink>)}
      </LeftWrapperOfPosts>
      <RightWrapperOfPosts>
        {[2, 6, 7, 8, 9, 2].map((element, id) => <StyledLink key={id} to={`/posts/${element}`}><SmallPostCard key={id} postCard={getPostCardbyId(element)!}></SmallPostCard></StyledLink>)}
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
