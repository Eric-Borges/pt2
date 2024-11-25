import React, { useState } from 'react';

const App = () => {
  // Estado para o texto controlado
  const [text, setText] = useState('');
  
  // Estado para o contador de cliques
  const [clickCount, setClickCount] = useState(0);

  // Função para atualizar o texto digitado
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Função para incrementar o contador
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="container">
      <h1>Texto Controlado e Contador</h1>

      {/* Campo de Texto Controlado */}
      <div className="text-control">
        <h3>Digite algo:</h3>
        <input
          type="text"
          value={text}
          onChange={handleTextChange} // Atualiza o estado conforme o usuário digita
          placeholder="Digite algo..."
        />
        <p>Texto Digitado: {text}</p>
      </div>

      {/* Contador de Cliques */}
      <div className="counter">
        <h3>Contador de Cliques</h3>
        <button onClick={handleButtonClick}>Clique Aqui</button>
        <p>Você clicou {clickCount} vezes!</p>
      </div>
    </div>
  );
};

export default App;
