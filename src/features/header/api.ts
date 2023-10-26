import { authorisationHeaders, baseUrl } from '../../api/constants';
import { request } from '../../api/request';
import { UserNameResponse } from './types';

export const profileApi = {
  getProfile: (): Promise<UserNameResponse> => {
    return request(baseUrl + 'auth/users/me/', {
      method: 'GET',
      headers: {
        ...authorisationHeaders,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER ERROR');
      }
      return response.json();
    });
  },
};
