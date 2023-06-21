export type User = {
  email: string;
  number?: string;
};

export type GetUserResponse = {
  data: User[];
};
