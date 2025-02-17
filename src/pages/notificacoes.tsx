import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Notificacoes() {
  const {alternarTema} = useAppData()
  return (
      <Layout titulo="Notificações" 
        subTitulo="Aqui você vai gerenciar as suas notificações">
        <button onClick={alternarTema} className="h-10 w-40 bg-yellow-500">Alteranar Tema</button>
      </Layout>
  );
}
