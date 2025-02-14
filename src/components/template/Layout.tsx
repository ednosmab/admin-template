import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    titulo: string;
    subTitulo: string;
    children?: React.ReactNode;
}

export default function Layout (props: LayoutProps){
    return (
        <div>
            <MenuLateral/>
            <Cabecalho titulo={props.titulo} subTitulo={props.subTitulo}/>
            <Conteudo>
                {props.children}
            </Conteudo>
        </div>
    )
}