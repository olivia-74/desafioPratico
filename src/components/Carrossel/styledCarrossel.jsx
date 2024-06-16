import styled from 'styled-components';

export const CarrosselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const CarrosselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarrosselItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #333;
  background-color: transparent;
  border-radius: 8px;
  padding: 2rem;

    h2{
        font-size: 10vh;
        color: white;
    }

    div{
        margin-top: 1rem;
    }

    button{
        margin: 0.5rem;
        padding: 15px;
        border: rgb(119, 16, 198) 3px solid;
        font-size: 15px;
        font-weight: bold;
        border-radius: 25px;
        background-color: rgb(119, 16, 198);
        color: white;
        cursor: pointer;
        text-transform: uppercase;


        &.transparent{
            background-color: transparent;
            border: white 3px solid;

        }

        &:hover{
            background-color: #ffffff5e;
            border: #ffffff5e 3px solid;
        }
    }
`;


export const Controller = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  cursor: pointer;
  z-index: 1;
  user-select: none;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;
