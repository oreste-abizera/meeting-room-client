import { createContext, PropsWithChildren, useState } from "react";

interface AppContextInterface {}

// create a new context file for the app
const AppContext = createContext<AppContextInterface | null>(null);

const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
