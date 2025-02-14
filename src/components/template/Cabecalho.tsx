import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: string;
    subTitulo: string;
    children?: React.ReactNode;
}

export default function Cabecalho (props: CabecalhoProps){
    return (
        <div>
            <Titulo titulo={props.titulo} subTitulo={props.subTitulo}/>
        </div>
    )
}