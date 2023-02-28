import React, { Component } from 'react'

const conteudos = [
    {
      nome: 'JavaScript assíncrono',
      bloco: 9,
      status: 'já aprendi'
    },
    {
      nome: 'Composição de Componentes',
      bloco: 10,
      status: 'estou aprendendo',
    },
    {
      nome: 'Composição de Estados',
      bloco: 11,
      status: 'aprenderei'
    },
    {
      nome: 'Redux',
      bloco: 15,
      status: 'aprenderei'
    },
  ];

class RenderizandoArray extends Component {
    render() { return ( <>  <ul className='talDoUl'>
    {conteudos.map((conteudo) => {
      return <li key={ conteudo.nome } className='card'>
        <p>Eu {conteudo.status} o conteúdo {conteudo.nome} no bloco {conteudo.bloco}.</p>
        </li>
})}
        </ul>
    </> 
    )}
}

export default RenderizandoArray