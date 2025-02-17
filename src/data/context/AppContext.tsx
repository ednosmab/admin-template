import React, { createContext, useState } from "react";

type Tema = 'dark' | '' | null
interface AppContextProps{
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: null,
    alternarTema: () => {}
})

export function AppProvider(props: React.PropsWithChildren){
    const [tema, setTema] = useState<Tema>('')
    function alternarTema(){
        setTema(tema === '' ? 'dark' : '')
    }
    return(
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext