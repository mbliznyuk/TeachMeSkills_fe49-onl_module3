import { MiddlePostCard } from '../../ui/post_card/middle_post_card/middle_post_card';
import { styled } from 'styled-components';
import { PostCardModel } from '../../ui/post_card/post-card.model';
import { SmallPostCard } from '../../ui/post_card/small_post_card/small_post_card';

type ListOfPostsProps = {
  postCards: PostCardModel[];
};

export const ListOfPosts: React.FC<ListOfPostsProps> = (
  props: ListOfPostsProps
) => {
  return (
    <ListOfPostsWrapper>
      <LeftWrapperOfPosts>
        <MiddlePostCard postCard={props.postCards[1]}></MiddlePostCard>
        <MiddlePostCard postCard={props.postCards[2]}></MiddlePostCard>
        <MiddlePostCard postCard={props.postCards[9]}></MiddlePostCard>
        <MiddlePostCard postCard={props.postCards[3]}></MiddlePostCard>
        <MiddlePostCard postCard={props.postCards[4]}></MiddlePostCard>
        <MiddlePostCard postCard={props.postCards[5]}></MiddlePostCard>
      </LeftWrapperOfPosts>
      <RightWrapperOfPosts>
        <SmallPostCard postCard={props.postCards[2]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[6]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[7]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[8]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[9]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[2]}></SmallPostCard>
      </RightWrapperOfPosts>
    </ListOfPostsWrapper>
  );
};

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
