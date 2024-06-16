import styled from 'styled-components';
import imagemFundo from '../../assets/capa.png';

export const ContainerImagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x;
  position: relative;
  background: 
    linear-gradient(95deg, rgba(255, 77, 237, 0.724) 0%, rgba(159, 58, 237, 0.712) 100%),
    url(${imagemFundo});
`;

export const CardContent = styled.div`
    background: transparent; 
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    display: flex;
    height: 50%; 
    width: 60%;
    display: flex;
    position: absolute; 
    justify-content: center;
    align-items: center;


`
