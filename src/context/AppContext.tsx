import axios from "axios";
import { createContext, PropsWithChildren, useState } from "react";
import url from "../helpers/url";
import { RegisterInfo, StorageUser, User } from "../types";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface AppContextInterface {
  user: StorageUser;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: String;
  handleLoading: (isLoading: boolean) => void;
  handleError: (isLoading: string) => void;
  handleRegister: ({}: RegisterInfo) => Promise<void>;
}

// create a new context file for the app
const AppContext = createContext<AppContextInterface | null>(null);

const getUserFromSessionStorage = (): StorageUser => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const syncUserToSessionStorage = (user: StorageUser) => {
  if (user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    sessionStorage.removeItem("user");
  }
};

const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, setState] = useState({
    user: getUserFromSessionStorage(),
    isLoggedIn: getUserFromSessionStorage() !== null,
    isLoading: false,
    error: "",
  });

  const navigate = useNavigate();

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

  const handleError = (error: string) => {
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
      value={{ ...state, handleLoading, handleError, handleRegister }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
