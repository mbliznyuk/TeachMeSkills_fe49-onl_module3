import { styled } from 'styled-components';
import { useState } from 'react';
import { PostCardModel } from '#ui/post_card/post-card.model';
import { PostNavigationFooter } from '#features/post-navigation-footer/post-navigation-footer';
import { SelectedPostLikes } from '#features/selected-post-likes/selected-post-likes';

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
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const MainWrapper = styled.div`
  margin-bottom: 25px;
`;

const PostTextWrapper = styled.div`
  width: 85%;
  margin: auto;
`;
const PostText = styled.p`
  color: var(--text-secondary-color);
  font-size: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 26px;
  margin-bottom: 30px;
`;

const CardImageWrapper = styled.div`
  width: 90%;
  height: 250px;
  margin: auto;
  margin-bottom: 25px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
