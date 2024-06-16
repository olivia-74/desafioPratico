import React, { useState } from 'react';
import { Container, ImagesContainer, TextContainer } from './styledGaleria';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/1.jpeg';
import img6 from '../../assets/2.jpeg';
import img7 from '../../assets/3.jpeg';
import img8 from '../../assets/4.jpeg';

function Galeria(){

// guarda a imagem selecionada
    const [selectedImage, setSelectedImage] = useState('default');

// selecionando a imagem
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

// retorna o conteudo para cada caso
    const getContent = () => {
        switch (selectedImage) {
            case 'img1':
                return (
                    <>
                        <h2>O que é o Lorem Ipsum?</h2>
                        <h3>Por que é que o usamos?</h3>
                        <p>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.</p>
                        <h3>De onde é que ele vem?</h3>
                        <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos.</p>
                        <h3>Onde posso arranjar algum?</h3>
                        <p>Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.</p>
                    </>
                );
            case 'img2':
                return (
                    <div className='img2'>
                        <h2>O que é o Lorem Ipsum?</h2>
                        <h3>Por que é que o usamos?</h3>
                        <p>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.</p>
                    </div>
                );
            case 'img3':
                return (
                    <div className="img3">
                        <h2>O que é o Lorem Ipsum?</h2>
                        <h3>Por que é que o usamos?</h3>
                        <p>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.</p>
                        <h3>De onde é que ele vem?</h3>
                        <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos.</p>
                        <h3>Onde posso arranjar algum?</h3>
                        <p>Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.</p>
                    </div>
                );
            case 'img4':
                return (
                    <ImagesContainer className="img4">
                        <div>
                            <img src={img5} alt="Artista" onClick={() => handleImageClick('img5')} />
                            <img src={img6} alt="Artista" onClick={() => handleImageClick('img6')} />
                            <img src={img7} alt="Artista" onClick={() => handleImageClick('img7')} />
                            <img src={img8} alt="Artista" onClick={() => handleImageClick('img8')} />
                        </div>
                    </ImagesContainer>
                );
            default:
                return (
                    <>
                        <h2>O que o Spotify tem?</h2>
                        <h3>Músicas</h3>
                        <p>O Spotify tem milhões de músicas. Escute seus sons favoritos, descubra novas músicas e reúna seus favoritos em um só lugar.</p>
                        <h3>Playlists</h3>
                        <p>No Spotify você encontra uma playlist para cada momento. Todas feitas por fanáticos e especialistas da música.</p>
                        <h3>Novos lançamentos</h3>
                        <p>Escute os novos lançamentos de singles e álbuns da semana e veja o que está bombando no Top 50.</p>
                    </>
                );
        }
    };

    return (
        <Container>
            <ImagesContainer>
                <div>
                    <img src={img1} alt="Artista" onClick={() => handleImageClick('img1')} />
                    <img src={img2} alt="Artista" onClick={() => handleImageClick('img2')} />
                    <img src={img3} alt="Artista" onClick={() => handleImageClick('img3')} />
                    <img src={img4} alt="Artista" onClick={() => handleImageClick('img4')} />
                </div>
            </ImagesContainer>
            
            {/* condicao para as mudancas de estilizacao e para a  animacao da img3 */}
            <TextContainer className={selectedImage === 'img3' ? 'img3' : selectedImage === 'img2' ? 'img2' : ''}>
                {getContent()}
            </TextContainer>
        </Container>
    );
};

export default Galeria;
