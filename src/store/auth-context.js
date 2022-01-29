import { createContext } from "react";

const AuthContext = createContext({
    token: '',
    login: () => {},
    logout: () => {},
});

const AuthContextProvider = (props) => {

};