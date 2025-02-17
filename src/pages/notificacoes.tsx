import Layout from "@/components/template/Layout";
import { AppConsumer } from "@/data/context/AppContext";
import useAppData from "@/data/hook/useAppData";

export default function Notificacoes() {
  const dados = useAppData()
  return (
      <Layout titulo="Notificações" 
        subTitulo="Aqui você vai gerenciar as suas notificações">
        <h3>{dados.nome}</h3>
      </Layout>
  );
}
