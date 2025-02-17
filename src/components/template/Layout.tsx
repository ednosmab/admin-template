import useAppData from "@/data/hook/useAppData";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    titulo: string;
    subTitulo: string;
    children?: React.ReactNode;
}

export default function Layout (props: LayoutProps){
    const {tema} = useAppData()
    return (
        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral/>
            <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
                <Cabecalho titulo={props.titulo} subTitulo={props.subTitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}