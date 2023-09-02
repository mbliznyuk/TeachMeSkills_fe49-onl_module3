import { CSSProperties } from 'react';
import { styled } from 'styled-components';

export const BigPostCardWrapper = styled.div`
  width: 600px;
  background-color: #f3f3f3;
  padding: 15px 20px;
  border-bottom: 1px solid #8B8A90;
  height: 310px;
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardtextWrapper = styled.div`
width: 65%;
`;
export const PostCardDate = styled.div`
color: #8B8A90;
font-size: 14px;
`;

export const PostCardTitle = styled.h2`
color: #403F44;
line-height: 30px;
font-size: 28px;
margin:10px 0;
`;

export const PostCardText = styled.div`
color: #8B8A90;
font-size: 16px;
margin-bottom: 15px;
`;

export const CardImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const IconWrapper = styled.div`
display: flex;
justify-content: space-between;
`;
export const LikeWrapper = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
font-size: 18px;
`;
export const AmountOfLikes = styled.div`
`;
export const SaveIcoonWrapper = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
font-size: 18px;
`;
export const BookmarkIcon = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
font-size: 18px;
`;


export const postCardIconStyle: CSSProperties = {
 border: '1px solid black'
}
