
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';

function App() {

  const [input, setInput] = useState('')

  function handleSearch(){
    if(input === ''){
      alert('preencha algum cep')
      return;
    }
  }
  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className="containerInput">
        <input
        type='text'
        placeholder='Digite seu cep...'
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
          

        </button>
      </div>
      <main className='main'>
        <h2>CEP: 788665544</h2> 
        <span> Rua Teste algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Heliópolis</span>
        <span>Garanhuns- Pernambuco</span>

      </main>
    </div>
  );
}

export default App;
