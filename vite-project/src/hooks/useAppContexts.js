import { useContext } from "react";
import { AppContexts } from "../contexts";

const userAppContext = () => {
    const contexto = useContext(AppContexts)
    
    return (
        contexto
    )
}

export { userAppContext };