import { createContext, useState } from "react";
import { Booking, Building, Place, UserDTO } from "../types";
import axios from "../helpers/axios";
import url from "../helpers/url";

export interface Store {
  users: [UserDTO];
  buildings: [Building];
  places: [Place];
  bookings: [Booking];
  error: any;
  isLoading: boolean;
}

interface StoreContextInterface {
  store: Store;
  setStore: (store: Store) => void;
  loadUsers: () => void;
  loadBuildings: () => void;
  loadPlaces: () => void;
  loadBookings: () => void;
}

const StoreContext = createContext<StoreContextInterface>(null!);

export const StoreContextProvider = ({ children }: any) => {
  const [store, setStore] = useState<Store>(null!);

  const loadUsers = async () => {
    try {
      const response = await (await axios.get(url + "/users")).data;
      setStore({ ...store, users: response.data });
    } catch (error) {
      setStore({ ...store, error });
    }
  };

  const loadBuildings = async () => {
    try {
      const response = await (await axios.get(url + "/buildings")).data;
      setStore({ ...store, buildings: response.data });
    } catch (error) {
      setStore({ ...store, error });
    }
  };

  const loadPlaces = async () => {
    try {
      const response = await (await axios.get(url + "/places")).data;
      setStore({ ...store, places: response.data });
    } catch (error) {
      setStore({ ...store, error });
    }
  };

  const loadBookings = async () => {
    try {
      const response = await (await axios.get(url + "/bookings")).data;
      setStore({ ...store, bookings: response.data });
    } catch (error) {
      setStore({ ...store, error });
    }
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
        loadUsers,
        loadBookings,
        loadBuildings,
        loadPlaces,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
