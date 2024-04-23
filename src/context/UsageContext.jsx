import { createContext, useReducer } from "react";
import { initialState, usageReducer } from "../hooks/usageReducer";

export const usageContext = createContext();

export const UsageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usageReducer, initialState);

    return (
        <usageContext.Provider value={{ state, dispatch }}>
            {children}
        </usageContext.Provider>
    )
}