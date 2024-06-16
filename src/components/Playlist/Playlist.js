import React from 'react';
import { ImagesContainer, TextContainer } from './styledPlaylist';
import image1 from '../../assets/iphone1.png'; 
import image2 from '../../assets/iphone2.png'; 

function Playlist() {
  return (
    <>
      <TextContainer>
        <h2>Fácil</h2>
        <h3>Buscar</h3>
        <p>Já sabe o que quer escutar? <br/>É só procurar e apertar o play.</p>
        <h3>Navegar</h3>
        <p>Veja os novos lançamentos, o que está bombando nas paradas e as melhores playlists para o seu momento.</p>
        <h3>Descobrir</h3>
        <p>Curta músicas novas toda segunda-feira com uma playlist personalizada pra você. Ou relaxe e curta uma das rádios.</p>
      </TextContainer>

      <ImagesContainer>
        <img src={image1} alt="Celular 1" className='iphone1'/>
        <img src={image2} alt="Celular 2" className='iphone2'/>
      </ImagesContainer>
    </>
  );
}

export default Playlist;
