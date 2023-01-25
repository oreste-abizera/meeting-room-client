import { createContext, PropsWithChildren, useEffect, useState } from "react";
import url from "../helpers/url";
import { LoginInfo, RegisterInfo, StorageUser, User } from "../types";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios, { setAuthorizationToken } from "../helpers/axios";
import firebase from "../service/firebase";

interface AppContextInterface {
  user: StorageUser | null;
  isAdmin: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
  handleLoading: (isLoading: boolean) => void;
  handleError: (isLoading: string) => void;
  handleRegister: ({}: RegisterInfo) => Promise<void>;
  handleLogin: ({}: LoginInfo) => Promise<void>;
  handleLogout: () => void;
  reloadUser: () => void;
}

// create a new context file for the app
const AppContext = createContext<AppContextInterface>(null!);

export const getUserFromSessionStorage = (): StorageUser | null => {
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
        setState((state) => {
          return {
            ...state,
            user,
            isLoggedIn: true,
          };
        });
        syncUserToSessionStorage(user);
        setAuthorizationToken(user.token as string);
        toast.success("Login successful");
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Something went wrong";
      handleError(message);
      toast.error(message);
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
      const message =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong";
      handleError(message);
      toast.error(message);
    } finally {
      handleLoading(false);
    }
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    setState((state) => {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    });
    syncUserToSessionStorage(null);
    setAuthorizationToken("");
  };

  const handleError = (error: any) => {
    setState((state) => {
      return {
        ...state,
        error,
      };
    });
  };

  const handleLoading = (isLoading: boolean) => {
    setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  const reloadUser = async () => {
    try {
      handleLoading(true);
      let response = await axios.get(url + "/auth/me");
      if (response.data?.success) {
        let user: StorageUser = {
          info: response.data.data,
          token: state.user?.token as string,
        };
        setState((state) => {
          return {
            ...state,
            user,
            isLoggedIn: true,
          };
        });
        syncUserToSessionStorage(user);
        setAuthorizationToken(user.token as string);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Something went wrong";
      handleError(message);
      toast.error(message);
    } finally {
      handleLoading(false);
    }
  };

  const handleGoogleLogin = async (user: any) => {
    try {
      handleLoading(true);
      const { email, displayName, photoURL } = user;
      const [firstName, lastName] = displayName.split(" ");
      let response = await axios.post(url + "/auth/google", {
        firstName,
        lastName,
        email,
        photoURL,
      });

      if (response.data.success) {
        let user: StorageUser = {
          info: response.data.data,
          token: response.data.token,
        };
        setState((state) => {
          return {
            ...state,
            user,
            isLoggedIn: true,
          };
        });
        syncUserToSessionStorage(user);
        setAuthorizationToken(user.token as string);
        toast.success("Login successful");
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Something went wrong";
      handleError(message);
      toast.error(message);
    } finally {
      handleLoading(false);
    }
  };

  const subscribeToGoogleAuthChanges = () => {
    firebase.auth().onAuthStateChanged(async (user: any) => {
      if (user && !state.isLoggedIn) {
        await handleGoogleLogin(user);
      }
    });
  };

  useEffect(() => {
    subscribeToGoogleAuthChanges();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        isAdmin: state.user?.info?.isAdmin ? true : false,
        handleLoading,
        handleError,
        handleRegister,
        handleLogin,
        handleLogout,
        reloadUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
