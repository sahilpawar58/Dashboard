import React from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({children}) => {
    const [user,setUser] = React.useState({})
    const [village,setVillage] = React.useState({});
    
        return(
            <AuthContext.Provider value={{user,setUser,village,setVillage}}>
                {children}
            </AuthContext.Provider>
        )
    
}


export default AuthContextProvider;