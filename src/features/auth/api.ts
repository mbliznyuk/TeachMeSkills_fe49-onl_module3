import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import {
  ActivationPayload,
  ActivationResponse,
  AuthorisationPayload,
  AuthorisationResponse,
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

  authorise: (
    payload: AuthorisationPayload
  ): Promise<AuthorisationResponse> => {
    return fetch(baseUrl + 'auth/jwt/create/', {
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
