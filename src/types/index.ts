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

export type Building = {
  _id: String;
  name: String;
  address: String;
  floors: Number;
  image: {
    image_url: String;
    public_id: String;
  };
  description?: String;
  createdAt: Date;
  updatedAt: Date;
  __v: Number;
};

export type Place = {
  _id: String;
  name: String;
  location: String;
  floor: Number;
  building: Building;
  images: [
    {
      image_url: String;
      public_id: String;
    }
  ];
  description?: String;
  createdAt: Date;
  updatedAt: Date;
  __v: Number;
};

export type Booking = {
  _id: String;
  place: Place;
  user: UserDTO;
  startTime: Date;
  endTime: Date;
  status: String;
  createdAt: Date;
  updatedAt: Date;
  __v: Number;
};

export type Statistics = {
  numberOfBookings: Number;
  numberOfPlaces: Number;
  numberOfBuildings: Number;
  numberOfUsers: Number;
};
