import Image from "next/image"
import loading from "../../../public/images/loading.gif"
import useAuth from "@/data/hook/useAuth"
import router from "next/router"
import Head from "next/head"

export default function ForcarAutenticacao(props){
    
    const {usuario, carregando} = useAuth()

    function renderizarConteudo(){
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")){
                                    window.location.href = "/autenticacao"
                                }    

                            `
                        }}
                    ></script>
                </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} alt="gif do pacman comendo as bolinhas"/>
            </div>
        )
    }

    if(!carregando && usuario?.email){
        return renderizarConteudo()
    }else if(carregando){
        return renderizarCarregando()
    }else{
        router.push('/autenticacao')
        return null
    }

}