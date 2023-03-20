import React from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const AppProvider = ({children}) => {

    const store = {pepino: "pepinitooo"};
    const actions = {};

    <Context.Provider value={{store, actions}}>
        {children}
    </Context.Provider>
}

const useAppProvider = () => useContext(Context);

export default useAppProvider;