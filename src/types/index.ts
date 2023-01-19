export interface User {
  firstName: String;
  lastName: String;
  email: String;
  companyName: String;
  country: String;
}

export interface StorageUser {
  info: User;
  token: String;
}

export interface RegisterInfo {
  firstName: String;
  lastName: String;
  email: String;
  companyName: String;
  country: String;
  password: String;
  confirmPassword: String;
}

export interface LoginInfo {
  email: String;
  password: String;
}

export type UserDTO = {
  _id: String;
  firstName: String;
  lastName: String;
  email: String;
  companyName: String;
  country: String;
  createdAt: Date;
  updatedAt: String;
  __v: Number;
};
