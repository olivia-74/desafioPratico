import React, { useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { CarrosselContainer, CarrosselWrapper, CarrosselItem, Controller } from './styledCarrossel';

function Carrossel () {
  
  // estados pra controlar as animacoes do carrossel
  const [IndexAtual, setIndexAtual] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // funcao para proximo slide
  const handleProximo = () => { 
    if (!isAnimating) {
      setIsAnimating(true);
      setIndexAtual((IndexAnterior) => (IndexAnterior + 1) % 2); 
    }
  };

  // funcao para o slide anterior
  const handleAnterior = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIndexAtual((IndexAnterior) => (IndexAnterior - 1 + 2) % 2); 
    }
  };

  // funcao para mudar o estado
  const handleTransicao = () => {
    setIsAnimating(false);
  };

  return (
    <CarrosselContainer>

      <Controller className="left" onClick={handleAnterior}><GrPrevious size={25}/></Controller>

      <CarrosselWrapper
        style={{ transform: `translateX(-${IndexAtual * 100}%)`, transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none' }}
        onTransicao={handleTransicao}
      >
        {/* primeiro slide */}
        <CarrosselItem>
          <h2>Música para todos</h2>
          <div>
            <button>Aproveite o Spotify Free</button>
            <button className='transparent'>Obter o Spotify Premium</button>
          </div>
        </CarrosselItem>

        {/* segundo slide */}
        <CarrosselItem>
          <h2>As melhores rádios</h2>
          <div>
            <button>♫ Ouça agora</button>
          </div>
        </CarrosselItem>

      </CarrosselWrapper>

      <Controller className="right" onClick={handleProximo}><GrNext size={25}/></Controller>

    </CarrosselContainer>
  );
};

export default Carrossel;
