import { createContext, useState } from "react";
import { UserDTO } from "../types";
import axios from "../helpers/axios";
import url from "../helpers/url";

export interface Store {
  users: [UserDTO];
  error: any;
  isLoading: boolean;
}

interface StoreContextInterface {
  store: Store;
  setStore: (store: Store) => void;
  loadUsers: () => void;
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
  return (
    <StoreContext.Provider value={{ store, setStore, loadUsers: loadUsers }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
