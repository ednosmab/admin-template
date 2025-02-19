interface AuthInputProps<T = string>{
    label: string
    id: string
    valor: T
    tipo?: 'text' | 'email' | 'password'
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    varlorMudou: (novoValor: T) => void
}

export default function AuthInput(props: AuthInputProps){
    return props.naoRenderizarQuando ? (
        <div className="flex flex-col mt-4">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2 
                     border border-gray-300 focus:bg-white focus:border-blue-500 focus:outline-none
                `}
                type={props.tipo ?? 'text'} 
                id={props.id}
                value={props.valor}
                required={props.obrigatorio}
                onChange={e => props.varlorMudou?.(e.target.value)}
            />
        </div>
    ): ('')
}