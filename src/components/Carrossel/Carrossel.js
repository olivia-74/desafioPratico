import React, { useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { CarrosselContainer, CarrosselWrapper, CarrosselItem, Controller } from './styledCarrossel';

function Carrossel() {
  const numSlides = 2; 

  const [indexAtual, setIndexAtual] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProximo = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIndexAtual((indexAnterior) => (indexAnterior + 1) % numSlides);
    }
  };

  const handleAnterior = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIndexAtual((indexAnterior) => (indexAnterior - 1 + numSlides) % numSlides);
    }
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <CarrosselContainer>
      <Controller className="left" onClick={handleAnterior}><GrPrevious size={25}/></Controller>

      <CarrosselWrapper
        style={{
          transform: `translateX(-${indexAtual * 100}%)`,
          transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <CarrosselItem>
          <h2>Música para todos</h2>
          <div>
            <button>Aproveite o Spotify Free</button>
            <button className='transparent'>Obter o Spotify Premium</button>
          </div>
        </CarrosselItem>

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
}

export default Carrossel;
