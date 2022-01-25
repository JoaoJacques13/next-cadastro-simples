import Cliente from '../core/Cliente';

interface TabelaProps {
  clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

  function renderizarCabecalho(){
    return(
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return(
        <tr key={cliente.id}>
          <th>{cliente.id}</th>
          <th>{cliente.nome}</th>
          <th>{cliente.idade}</th>
      </tr>
      )
    })
  }

  return(
    <table>
      <thead>{renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}