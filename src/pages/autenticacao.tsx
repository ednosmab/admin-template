import AuthInput from "@/components/auth/AuthInput";
import { IconeAtencao, IconeGoogle } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";
import Image from "next/image";

export default function Autenticacao(){
    const {usuario, loginGoogle} = useAuth()

    console.log(usuario)

    const [erro, setErro] = useState<string | null>(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg: string, tempoEmSegundos = 1000){
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 5)
    }

    function submeter(){
        if(modo === 'login'){
            console.log('login')
            exibirErro('Ocorreu um erro no login!')
        }else{
            console.log('cadastrar')
            exibirErro('Ocorreu um erro no cadastro!')
        }
    }
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block w-1/2 lg:w-2/3">

                <Image
                    src={"https://picsum.photos/1024"}
                    alt="Imagem da tela de autenticação"
                    className="h-screen w-full object-cover"
                    width={1024}
                    height={0} // a altura não está interferindo na renderização da imagem
                />
            </div>

            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                        text-3xl font-bold mb-5
                    `}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>

                {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white
                        py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconeAtencao(7)}
                        <span className="ml-3 text-sm">{erro}</span>
                    </div>

                ) : ('')}

                <AuthInput 
                    naoRenderizarQuando={true}
                    label="Email"
                    tipo="email"
                    id="id-email"
                    valor={email}
                    obrigatorio={true}
                    varlorMudou={setEmail}
                    />
                <AuthInput 
                    naoRenderizarQuando={true}
                    label="Senha"
                    tipo="password"
                    id="id-senha"
                    valor={senha}
                    varlorMudou={setSenha}
                    />
                <button 
                    onClick={submeter}
                    className={`
                            w-full bg-indigo-500 hover:bg-indigo-400
                            text-white rounded-lg px-4 py-3 mt-6
                        `}
                >
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>

                <button 
                    onClick={loginGoogle}
                    className={`
                            flex items-center justify-center
                            w-full bg-gray-800 hover:bg-gray-700
                            text-white rounded-lg px-4 py-3
                        `}
                >
                    <span className="mr-5">Entrar com o Google</span> {IconeGoogle(20)}
                    
                </button>
                
                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')}
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}
                        > Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')}
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}
                        > Entre com as suas Credenciais
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}