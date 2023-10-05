import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import {
  ActivationPayload,
  ActivationResponse,
  RegistrationPayload,
} from './types';

export const api = {
  activate: (payload: ActivationPayload): Promise<string> => {
    return fetch(baseUrl + 'auth/users/activation/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        ...jsonContentTypeHeaders,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER ERROR');
      }
      return response.text();
    });
  },
  register: (payload: RegistrationPayload) => {
    return fetch(baseUrl + 'auth/users/', {
      method: 'POST',
      body: JSON.stringify(payload),
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
