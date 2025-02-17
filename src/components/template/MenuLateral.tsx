import { IconeAjustes, IconeCasa, IconeSino, IconeSair } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return(
        <aside className="flex flex-col">
            <div className={`
                    flex flex-col items-center justify-center
                    bg-gradient-to-r from-indigo-500 to-purple-800
                    h-20 w-20
                `}>

                <Logo/>
            </div>

            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>
            </ul>
            <ul>
                <MenuItem 
                    onClick={() => alert("Logout")} 
                    className={`
                        text-red-600
                        hover:bg-red-600 hover:text-white`} 
                    texto="Sair" 
                    icone={IconeSair}/>
            </ul>            
        </aside>
    )
}