interface MenuItemProps {
    url: string
    texto: string
    icone: React.ReactNode
}

export default function MenuItem(props: MenuItemProps){
    return(
        <li className={``}>
            {props.icone}
        </li>
    )
}