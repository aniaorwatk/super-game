"use client";

import { createContext, useContext, useState } from "react";

type IMainProviderType = {
  children: React.ReactNode;
};

type IMainContextType = {
  name: string;
  setName: (name: string) => void;
};

const MainContext = createContext<IMainContextType | null>(null);

export const useMainContext = (): IMainContextType => {
  const contextData = useContext(MainContext);

  if (!contextData) {
    throw new Error("useMainContext must be used within a MainProvider");
  }
  return contextData;
};

const MainProvider = ({ children }: IMainProviderType) => {
  const [name, setName] = useState("");

  const contextValue: IMainContextType = { name, setName };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
