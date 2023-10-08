export type RegistrationPayload = {
  username: string;
  password: string;
  email: string;
};

export type RegistrationResponse = {
  id: number;
  username: string;
  email: string;
  course_group: any | null;
};

export type ActivationPayload = {
  uid: string;
  token: string;
};

export type ActivationResponse = {
  uid: string;
  token: string;
};

export type AuthorisationPayload = {
  email: string;
  password: string;
};

export type AuthorisationResponse = {
  access: string;
  refresh: string;
};
