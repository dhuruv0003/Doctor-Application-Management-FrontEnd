import { Children, createContext, useState } from "react";

export const AppContext = createContext({isAuthenticated:false});

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const value={
        user,setUser,isAuthenticated,setIsAuthenticated
    }

    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )
}