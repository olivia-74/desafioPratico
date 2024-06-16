import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #202020;
  color: #fff;
  padding: 10vh 10vw;
  position: relative; 
  bottom: 0;
  left: 0;
`;

export const Logo = styled.img`
    height: 8vh;
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: center;

  ul {
    list-style-type: none;
    margin: 0 2vw;
    padding: 0;
    
    h3{
        margin-bottom: 0.5vh;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 15px;
    }
    a { 
        margin-bottom: 0.2vh;
        font-size: 15px;
        color: white;
        text-decoration: none;
        display: flex;
        flex-direction: column;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  
  img{
    margin-left: 1vw;
    background-color: transparent;
    height: 6vh;    
  }
`;
