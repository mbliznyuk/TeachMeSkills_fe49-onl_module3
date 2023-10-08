import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import { AllPostsResponse } from './types';

export const allPostsapi = {
  getAllPosts: (): Promise<AllPostsResponse> => {
    return fetch(baseUrl + 'blog/posts/?lesson_num=2023&limit=20&offset=20', {
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
