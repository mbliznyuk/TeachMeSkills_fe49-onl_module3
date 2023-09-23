import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hook';
import { clearPreview } from '#features/post-image-preview/post-image-preview.slice';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

type Props = {
  isDialogOpen: boolean;
};

export const PostImagePreview: React.FC<Props> = ({ isDialogOpen }) => {
  const { shownPostImage } = useAppSelector((state) => state.postImagePreview);
  const dispatch = useAppDispatch();
  return (
    <Popup open={isDialogOpen} onClose={() => dispatch(clearPreview())} modal>
      <PostImagePreviewWrapper>
        <CloseWindowButton onClick={() => dispatch(clearPreview())}>
          <i className="fa-solid fa-xmark"></i>
        </CloseWindowButton>

        <PreviewImageWrapper>
          <PreviewImage src={shownPostImage} alt="#"></PreviewImage>
        </PreviewImageWrapper>
      </PostImagePreviewWrapper>
    </Popup>
  );
};

const PostImagePreviewWrapper = styled.div`
  width: 90%;
  height: 90dvh;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const PreviewImageWrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  border-bottom: 1px solid var(--border-primary-color);
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const CloseWindowButton = styled.button`
  all: unset;
  text-align: right;
  cursor: pointer;
  font-size: 20px;
`;
