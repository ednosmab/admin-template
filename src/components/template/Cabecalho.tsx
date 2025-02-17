import useAppData from "@/data/hook/useAppData";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

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
            <div className={`flex flex-grow justify-end`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
            </div>
        </div>
    )
}