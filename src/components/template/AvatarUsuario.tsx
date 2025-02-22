import Link from "next/link";
import Image from "next/image";
import useAuth from "@/data/hook/useAuth";

interface AvatarUsuarioProps{
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps){
    const {usuario} = useAuth()
    return(
        <Link href="/perfil">
            <Image 
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                width={40}
                height={40}
                className={`
                        rounded-full cursor-pointer
                        ${props.className}
                    `}
                objectFit="cover"
            />

        </Link>
    )
}