import { BigPostCard } from '../../ui/post_card/big_post_card/big_post_card';
import { MiddlePostCard } from '../../ui/post_card/middle_post_card/middle_post_card';
import { PostCardModel } from '../../ui/post_card/post-card.model';
import { SmallPostCard } from '../../ui/post_card/small_post_card/small_post_card';
import {
  LeftWrapperForBigCard,
  LeftWrapperForMiddleCard,
  LeftWrapperOfPosts,
  ListOfPostsWrapper,
  RightWrapperOfPosts,
} from './list-of-posts.style';

type ListOfPostsProps = {
  postCards: PostCardModel[];
};

export const ListOfPosts: React.FC<ListOfPostsProps> = (
  props: ListOfPostsProps
) => {
  return (
    <ListOfPostsWrapper>
      <LeftWrapperOfPosts>
        <LeftWrapperForBigCard>
          <BigPostCard postCard={props.postCards[0]}></BigPostCard>
        </LeftWrapperForBigCard>
        <LeftWrapperForMiddleCard>
          <MiddlePostCard postCard={props.postCards[1]}></MiddlePostCard>
          <MiddlePostCard postCard={props.postCards[3]}></MiddlePostCard>
          <MiddlePostCard postCard={props.postCards[4]}></MiddlePostCard>
          <MiddlePostCard postCard={props.postCards[5]}></MiddlePostCard>
        </LeftWrapperForMiddleCard>
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
