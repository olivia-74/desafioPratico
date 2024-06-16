import styled from "styled-components";

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: -10vw;
  
  text-align: start;

  h2 {
    color: #aeeed0;
    font-size: 40px;
    margin-bottom: 4vh;
    font-weight: bold;
  }

  h3 {
    color: #aeeed0;
    font-size: 30px;
    margin-bottom: 2vh;
    font-weight: bold;
  }

  p {
    width: 90%;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 4vh;
    text-align: justify;
    color: white;
  }
`;

export const ImagesContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  position: relative;

  img {
    width: 65%;
    height: auto;
    position: absolute;

    &.iphone1 {
      transform: rotate(12deg); 
      top: -55vh;
      left: 10vh;
    }

    &.iphone2 {
      transform: rotate(12deg); 
      top: -35vh;
      right: -30vh;
    }
  }
`;
