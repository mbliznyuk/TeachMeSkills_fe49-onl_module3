import { styled } from 'styled-components';

export const MiddlePostCardWrapper = styled.div`
  width: 300px;
  height: 310px;
  background-color: #f3f3f3;
  padding: 15px 10px 16px 10px;
  border-bottom: 1px solid #8b8a90;
  display: flex;
  flex-direction: column;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostCardDate = styled.div`
  color: #8b8a90;
  font-size: 14px;
`;

export const PostCardTitle = styled.h2`
  color: #403f44;
  font-size: 18px;
  margin: 10px 0;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  margin: auto;
  margin-bottom: 15px;
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
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
export const SaveIcoonWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
