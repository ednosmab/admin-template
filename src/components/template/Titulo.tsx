interface TituloProps {
    titulo: string;
    subTitulo: string;
}

export default function Titulo (props: TituloProps){
    return (
        <div>
            <h1 className={`
                font-black text-3xl 
                text-gray-900 dark:text-gray-100`}>
                    {props.titulo}
            </h1>
            <h2 className={`
                font-light text-sm 
                text-gray-600 dark:dark:text-gray-300`}>
                    {props.subTitulo}
            </h2>
        </div>
    )
}