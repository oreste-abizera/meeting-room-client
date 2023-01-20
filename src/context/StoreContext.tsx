import { createContext, useContext, useState } from "react";
import { Booking, Building, Place, Statistics, UserDTO } from "../types";
import axios from "../helpers/axios";
import url from "../helpers/url";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

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
  bookPlace: (booking: any) => void;
  getCurrentUser: () => Promise<UserDTO>;
  changeProfile: (user: FormData) => void;
  approveBooking: (bookingId: string) => void;
  rejectBooking: (bookingId: string) => void;
}

const StoreContext = createContext<StoreContextInterface>(null!);

export const StoreContextProvider = ({ children }: any) => {
  const { reloadUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [store, setStore] = useState<Store>(null!);

  const handleLoading = (isLoading: boolean) => {
    setStore((store) => {
      return { ...store, isLoading };
    });
  };

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

  const bookPlace = async (booking: any) => {
    try {
      const response = await (
        await axios.post(url + "/bookings", booking)
      ).data;
      toast.success("Place booked successfully");
      navigate(`/bookings`);
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const getCurrentUser = async () => {
    try {
      const response = await (await axios.get(url + "/auth/me")).data;
      return response.data;
    } catch (error) {
      return null;
    }
  };

  const changeProfile = async (user: FormData) => {
    try {
      handleLoading(true);
      const response = await (await axios.put(url + "/auth/me", user)).data;
      toast.success("Profile changed successfully");
      reloadUser();
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      handleLoading(false);
    }
  };

  const approveBooking = async (bookingId: string) => {
    try {
      handleLoading(true);
      const response = await (
        await axios.put(url + "/bookings/" + bookingId + "/approve")
      ).data;
      toast.success("Booking approved successfully");
      loadBookings();
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      handleLoading(false);
    }
  };

  const rejectBooking = async (bookingId: string) => {
    try {
      handleLoading(true);
      const response = await (
        await axios.put(url + "/bookings/" + bookingId + "/reject")
      ).data;
      toast.success("Booking rejected successfully");
      loadBookings();
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      handleLoading(false);
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
        bookPlace,
        getCurrentUser,
        changeProfile,
        approveBooking,
        rejectBooking,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
