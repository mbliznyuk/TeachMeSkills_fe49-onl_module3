import { SelectedPostLikes } from '#features/post-likes-panel/selected-post-likes/selected-post-likes';
import { PostNavigationFooter } from '#features/post-navigation-footer/selected-post-navigation-footer';
import { PostCardModel } from '#ui/post_card/post-card.model';
import { styled } from 'styled-components';

type SelectedPostProps = {
  postCard: PostCardModel;
  previousPostTitle: string;
  nextPostTitle: string;
};

export const SelectedPost: React.FC<SelectedPostProps> = ({ postCard, previousPostTitle, nextPostTitle}) => {
  
  return (
    <>
      <PostWrapper>
        <MainWrapper>
          <CardImageWrapper>
            <img src={postCard.image} alt="#"></img>
          </CardImageWrapper>
          <PostTextWrapper>
            {postCard.text.split('\n').map((element, id) => (
              <PostText key={id}>{element}</PostText>
            ))}
          </PostTextWrapper>
        </MainWrapper>
        <SelectedPostLikes></SelectedPostLikes>
      </PostWrapper>
      <PostNavigationFooter previousPostTitle={previousPostTitle} nextPostTitle={nextPostTitle}></PostNavigationFooter>
    </>
  );
};

const PostWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const MainWrapper = styled.div`
margin: auto;
  margin-bottom: 25px;
`;

const PostTextWrapper = styled.div`
  width: 85%;
  margin: auto;
`;
const PostText = styled.p`
  color: var(--text-secondary-color);
  font-size: 16px;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 18px;
  margin-bottom: 20px;
`;

const CardImageWrapper = styled.div`
  width: 90%;
  height: 220px;
  margin: auto;
  margin-bottom: 25px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;