import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import url from "../helpers/url";
import { LoginInfo, RegisterInfo, StorageUser, User } from "../types";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface AppContextInterface {
  user: StorageUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
  handleLoading: (isLoading: boolean) => void;
  handleError: (isLoading: string) => void;
  handleRegister: ({}: RegisterInfo) => Promise<void>;
  handleLogin: ({}: LoginInfo) => Promise<void>;
  handleLogout: () => void;
}

// create a new context file for the app
const AppContext = createContext<AppContextInterface | null>(null);

const getUserFromSessionStorage = (): StorageUser | null => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const syncUserToSessionStorage = (user: StorageUser | null) => {
  if (user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    sessionStorage.removeItem("user");
  }
};

const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, setState] = useState({
    user: getUserFromSessionStorage(),
    isLoggedIn: getUserFromSessionStorage()?.token ? true : false,
    isLoading: false,
    error: null,
  });

  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: LoginInfo) => {
    try {
      handleLoading(true);
      let response = await axios.post(url + "/auth/login", {
        email,
        password,
      });
      if (response.data.success) {
        let user: StorageUser = {
          info: response.data.data,
          token: response.data.token,
        };
        setState({
          ...state,
          user,
          isLoggedIn: true,
        });
        syncUserToSessionStorage(user);
        toast.success("Login successful");
      }
    } catch (error: any) {
      console.log(error);
      handleError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          "Something went wrong"
      );
      toast.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      handleLoading(false);
    }
  };

  const handleRegister = async ({
    firstName,
    lastName,
    email,
    companyName,
    country,
    password,
    confirmPassword,
  }: RegisterInfo) => {
    try {
      handleLoading(true);
      if (confirmPassword !== password) {
        throw new Error("Passwords do not match");
      }

      let response = await axios.post(url + "/auth/register", {
        firstName,
        lastName,
        email,
        companyName,
        country,
        password,
      });
      if (response.data.success) {
        toast.success("Registration successful");
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      handleError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    } finally {
      handleLoading(false);
    }
  };

  const handleLogout = () => {
    setState({
      ...state,
      user: null,
      isLoggedIn: false,
    });
    syncUserToSessionStorage(null);
  };

  const handleError = (error: any) => {
    setState({
      ...state,
      error,
    });
  };

  const handleLoading = (isLoading: boolean) => {
    setState({
      ...state,
      isLoading,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleLoading,
        handleError,
        handleRegister,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
