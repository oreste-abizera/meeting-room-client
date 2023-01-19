import { createContext, useState } from "react";
import { Booking, Building, Place, Statistics, UserDTO } from "../types";
import axios from "../helpers/axios";
import url from "../helpers/url";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export interface Store {
  statistics: Statistics;
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
  addBuilding: (building: FormData) => void;
  addPlace: (place: FormData) => void;
  loadStatistics: () => void;
}

const StoreContext = createContext<StoreContextInterface>(null!);

export const StoreContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
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
      console.log("first", response.data);
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

  const addBuilding = async (building: FormData) => {
    try {
      const response = await (
        await axios.post(url + "/buildings", building)
      ).data;
      toast.success("Building added successfully");
      navigate("/buildings");
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const addPlace = async (place: FormData) => {
    try {
      const response = await (await axios.post(url + "/places", place)).data;
      toast.success("Place added successfully");
      navigate(`/buildings/${place.get("building")}/places`);
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const loadStatistics = async () => {
    try {
      const response = await (
        await axios.get(url + "/bookings/statistics")
      ).data;

      setStore({ ...store, statistics: response.data });
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
        addBuilding,
        addPlace,
        loadStatistics,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
