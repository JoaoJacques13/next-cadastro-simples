import type { NextPage } from 'next'
import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

const Home: NextPage = () => {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Joao', 24, '2'),
    new Cliente('Pedro', 12, '3'),
    new Cliente('Maria', 22, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido (cliente: Cliente){
    console.log(cliente.nome)
    setVisivel('tabela')
  }

  function novoCliente (){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente (cliente: Cliente){
    console.log(cliente)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <div className='flex justify-end'>
            <Botao cor='green' className='mb-4' 
              onClick={novoCliente}>
              Novo cliente
            </Botao>
          </div>
          <Tabela 
            clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}>
            
            </Formulario>
        )}
      </Layout>
    </div>
  )
}

export default Home
