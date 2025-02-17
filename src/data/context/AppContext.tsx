import React, { createContext } from "react";

const AppContext = createContext({
    nome: ""
})

export function AppProvider(props: React.PropsWithChildren){
    return(
        <AppContext.Provider value={{
            nome: "Teste Context Api"
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext