import React, { useEffect, useState } from 'react';

function App() {

  const INITIAL_STATE = [{
    id: 0,
    title: '',
    status: 0,
  }]
  const [email, setEmail] = useState(INITIAL_STATE);

  useEffect(() => {
    setEmail([
      { id: 1, title: 'teste1', status: 0 },
      { id: 2, title: 'teste2', status: 0 },
      { id: 3, title: 'teste3', status: 0 },
    ])

  }, []) 

  const handleClickRead = (indexClicked) => {
    setEmail((prevState) => (
      prevState
      .map((email, index) => 
      index === indexClicked ? {...email, status: 1} : email )
    ))
  }

  const handleUnreadClicked = (indexClicked) => {
    setEmail((prevState) => (
      prevState.map((email, index) => 
      index === indexClicked ? { ...email, status: 0 } : email,
      )
    ))
  }

  useEffect(() => {
    const allRead = email.every((email) => email.status === 1);
    if (allRead){
      window.alert('Parabéns!Todos os emails foram lidos')
    } 
  }, [email])
  
  const allEmailRead = () => {
    setEmail((oldState) => oldState.map((email) => ({ ...email, status: 1 })));
  };
  

  const allEmailUnRead = () => {
    setEmail((oldState) => oldState.map((email) => ({ ...email, status: 0 })));
  }

  return (
    <>
    <button
    onClick={ () => allEmailRead() }
    >Marcar todos como lidos
    </button>
    <button
    onClick={ () => allEmailUnRead() }
    >
      Marcar todos como não lidos
    </button>
    <div>
      {email.map(({ title, status }, index) => (
        <div 
        key={ index }>
          { title }
          <button
          onClick={ () => handleClickRead(index) }
          >
            lido
          </button>
          <button
          onClick={ () => handleUnreadClicked(index) }
          >
            não lido
          </button>
          <span>{ status }</span>
        </div>
      ))
      }
      <div>
        
      </div>
    </div>
    </>
  )

}

export default App; 
