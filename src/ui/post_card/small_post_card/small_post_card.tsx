import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostCardModel } from '../post-card.model';
import { SmallCardImageWrapper, SmallCardtextWrapper, SmallIconWrapper, SmallLikeWrapper, SmallMainWrapper, SmallPostCardDate, SmallPostCardTitle, SmallPostCardWrapper, SmallSaveIcoonWrapper } from './small_post_card.styles';
import { faBookmark, faEllipsisH, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

type SmallPostCardProps = {
  postCard: PostCardModel;
};

export const SmallPostCard: React.FC<SmallPostCardProps> = (
  props: SmallPostCardProps
) => {
  return (
    <SmallPostCardWrapper>
      <SmallMainWrapper>
        <SmallCardtextWrapper>
            <SmallPostCardDate>{props.postCard.date}</SmallPostCardDate>
            <SmallPostCardTitle>{props.postCard.title}</SmallPostCardTitle>
        </SmallCardtextWrapper>
        <SmallCardImageWrapper><img src={props.postCard.image} alt='#'></img></SmallCardImageWrapper>
      </SmallMainWrapper>
      <SmallIconWrapper>
        <SmallLikeWrapper>
        <FontAwesomeIcon icon={faThumbsUp} />
        <FontAwesomeIcon icon={faThumbsDown} />
        </SmallLikeWrapper>
        <SmallSaveIcoonWrapper>
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faEllipsisH} />
        </SmallSaveIcoonWrapper>
      </SmallIconWrapper>
    </SmallPostCardWrapper>
  );
};