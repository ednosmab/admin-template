interface TituloProps {
    titulo: string;
    subTitulo: string;
}

export default function Titulo (props: TituloProps){
    return (
        <div>
            <h1>
                    {props.titulo}
            </h1>
            <h2>
                    {props.subTitulo}
            </h2>
        </div>
    )
}