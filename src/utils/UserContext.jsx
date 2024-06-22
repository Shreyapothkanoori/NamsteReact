import { createContext } from "react";


const UserContext = createContext({
    loggedIn : "DefaultUser"
})

export default UserContext;