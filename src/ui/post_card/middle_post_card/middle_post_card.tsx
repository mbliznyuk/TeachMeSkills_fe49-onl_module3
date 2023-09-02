import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostCardModel } from '../post-card.model';
import { CardImageWrapper, IconWrapper, LikeWrapper, MainWrapper, MiddlePostCardWrapper, PostCardDate, PostCardTitle, SaveIcoonWrapper } from './middle_post_card.styles';
import { faBookmark, faEllipsisH, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

type MiddlePostCardProps = {
  postCard: PostCardModel;
};

export const MiddlePostCard: React.FC<MiddlePostCardProps> = (props: MiddlePostCardProps) => {
  return (
    <MiddlePostCardWrapper>
      <MainWrapper>
        <CardImageWrapper><img src={props.postCard.image} alt='#'></img></CardImageWrapper>
            <PostCardDate>{props.postCard.date}</PostCardDate>
            <PostCardTitle>{props.postCard.title}</PostCardTitle>
      </MainWrapper>
      <IconWrapper>
        <LikeWrapper>
        <FontAwesomeIcon icon={faThumbsUp} />
        <FontAwesomeIcon icon={faThumbsDown} />
        </LikeWrapper>
        <SaveIcoonWrapper>
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faEllipsisH} />
        </SaveIcoonWrapper>
      </IconWrapper>
    </MiddlePostCardWrapper>
  );
};
