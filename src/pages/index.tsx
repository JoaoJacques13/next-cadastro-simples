import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

const Home: NextPage = () => {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Joao', 24, '2'),
    new Cliente('Pedro', 12, '3'),
    new Cliente('Maria', 22, '4'),
  ]
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}

export default Home
