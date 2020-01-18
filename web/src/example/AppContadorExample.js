import React, {useState} from 'react';
//import Header from './Header'

// Componente - retorna conteúdo como html, css, js - nao interfere na aplicacao, somente um por arquivo
// Estado - Informacoes mantidas pelos componentes - Imutabilidade
// Propriedade - Passando atributo - Informacoes que o componente pai passa para o filho
function App() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
    setCounter(counter + 1)
  }
  return (
    // <div className="App">
    //   <h1>Hello World</h1>
    // </div>
    /*<>
        <Header title="Title 1"/>
        <Header title="Title 2"/>
        <Header title="Title 3"/>
    </> */
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
   
  );
}

export default App;
