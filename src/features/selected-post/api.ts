import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import { SelectedPostResponse } from './types';

export const selectedPostApi = {
  getSelectedPost: (postId: string): Promise<SelectedPostResponse> => {
    return fetch(baseUrl + `blog/posts/${postId}/`, {
      method: 'GET',
      headers: {
        ...jsonContentTypeHeaders,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER ERROR');
      }
      return response.json();
    });
  },
};
