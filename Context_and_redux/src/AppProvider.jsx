import { useState,useReducer } from "react";
import { ThemeContext, UserContext, LangContext , globalContext} from "./context";

//reducer decides how state changes where action tells what to do
function reducer(state, action) {
    switch (action.type) {
        case "TOGGLETHEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "SET_USER":
            return { ...state, user: action.payload };
        case "SET_LANG":
            return { ...state, lang: action.payload };
        default:
            return state;
            
        }
    }
//this is with usereducer.
const AppProvider = ({ children }) => {
    const initialState = {
        
        theme: "light",
        lang: "en",
        user: { name: "Guest" }
    }
    const [state,dispatch] = useReducer(reducer, initialState)

    return (
        
    <globalContext.Provider value={{ state, dispatch }}>
    {children}
    </globalContext.Provider>
)
}

//here we are creating provider component to wrap the application with provider and pass the value to the provider and consume the context in the required component using useContext hook
//this is without reducer and usereducer.
/*
const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    const [lang, setLang] = useState("en")
    const [user, setUser] = useState({ name: "Guest" })
    
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
    return (
        
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <LangContext value={{ lang, setLang }}>
    <UserContext value={{ user, setUser }}>
    {children}
    </UserContext>
    </LangContext>
    </ThemeContext.Provider>
)
}
*/
export default AppProvider;