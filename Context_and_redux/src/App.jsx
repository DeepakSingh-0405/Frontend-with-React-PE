import { useContext, useState } from "react";
import { ThemeContext, UserContext, LangContext, globalContext } from "./context";

const App = ()=>{
  // const {theme , toggleTheme} = useContext(ThemeContext)
  // const {lang, setLang} = useContext(LangContext)
  // const {user, setUser} = useContext(UserContext)

  const {state,dispatch} = useContext(globalContext)
  const {theme,lang,user} = state;

  return (
    <>
    <h1>Theme:{theme}</h1>
    <button onClick={()=>dispatch({type: "TOGGLETHEME"})}>{theme==="light"? "dark" : "light"}</button>
    <h1>Lang: {lang}</h1>
    <button onClick={()=>dispatch({type: "SET_LANG",payload: lang==="en" ? "hindi" : "en"})}>{lang==="en" ? "hindi" : "en"}</button>
    <h1>User:{user.name}</h1>
    </>
  )
}
export default App;