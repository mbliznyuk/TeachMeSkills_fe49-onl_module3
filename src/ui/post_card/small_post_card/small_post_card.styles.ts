import { styled } from 'styled-components';

export const SmallPostCardWrapper = styled.div`
  width: 350px;
  background-color: #f3f3f3;
  padding: 10px 20px 5px 20px;
  border-bottom: 1px solid #8b8a90;
  height: 155px;
`;
export const SmallMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const SmallCardtextWrapper = styled.div`
  width: 75%;
`;
export const SmallPostCardDate = styled.div`
  color: #8b8a90;
  font-size: 14px;
`;

export const SmallPostCardTitle = styled.h2`
  color: #403f44;
  line-height: 22px;
  font-size: 20px;
  margin: 10px 0;
`;

export const SmallPostCardText = styled.div`
  color: #8b8a90;
  font-size: 14px;
  margin-bottom: 30px;
`;

export const SmallCardImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const SmallIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SmallLikeWrapper = styled.div`
  width: 17%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
export const SmallSaveIcoonWrapper = styled.div`
  width: 17%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
