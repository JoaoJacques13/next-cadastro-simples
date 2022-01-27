import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
  cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id 
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return(
    <div>
      {id ? (
        <Entrada 
          somenteLeitura
          texto="Código" 
          valor={id}
          
        />  
      ): false}
      <Entrada 
        texto="Nome" 
        valor={nome}
        valorMudou={setNome}
        className="mb-2"
      />
      <Entrada 
        texto="Idade" 
        valor={idade} 
        tipo="number"
        valorMudou={setIdade}
        className="mb-2"
      />
      <div className="flex justify-end mt-3">
        <Botao cor="blue" className="mr-2">
          {id ? 'Altetrar' : 'Salvar'}
        </Botao>
        <Botao>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}