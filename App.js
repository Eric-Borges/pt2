import React, { useState } from 'react';
import InfoCard from './InfoCard';
import HobbyList from './HobbyList';
import './styles.css';

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
      <h1>Meu Perfil</h1>

      {/* InfoCard com título e descrição passados diretamente */}
      <InfoCard title="Sobre Mim" description="Olá, sou um desenvolvedor apaixonado por criar novas soluções e aprender constantemente." />

      <h3>Meus Hobbies</h3>
      {/* Renderizando o HobbyList */}
      <HobbyList hobbies={['Skatear', 'Programar', 'Correr', 'Treinar']} />

      <div className="text-control">
        <h3>Texto Controlado</h3>
        <input
          type="text"
          value={text}
          onChange={handleTextChange} // Atualiza o estado conforme o usuário digita
          placeholder="Digite algo..."
        />
        <p>Texto Digitado: {text}</p>
      </div>

      <div className="counter">
        <h3>Contador de Cliques</h3>
        <button onClick={handleButtonClick}>Clique Aqui</button>
        <p>Você clicou {clickCount} vezes!</p>
      </div>
    </div>
  );
};

export default App;
