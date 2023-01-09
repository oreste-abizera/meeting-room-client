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
