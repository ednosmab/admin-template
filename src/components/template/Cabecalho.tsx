import useAppData from "@/data/hook/useAppData";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";
import AvatarUsuario from "./AvatarUsuario";

interface CabecalhoProps {
    titulo: string;
    subTitulo: string;
    children?: React.ReactNode;
}

export default function Cabecalho (props: CabecalhoProps){
    const {tema, alternarTema} = useAppData()
    return (
        <div className={`flex `}>
            <Titulo titulo={props.titulo} subTitulo={props.subTitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
                <AvatarUsuario className="ml-3 dark:text-gray-200"/>
            </div>
        </div>
    )
}