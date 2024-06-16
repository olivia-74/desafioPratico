import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.491); 
  color: #fff;
  padding: 5vh 15vw;
  position: relative; 
  top: 0;
  left: 0;
  z-index: 1000; 
`;

export const Logo = styled.img`
    height: 50px;
    display: flex;
    justify-self: flex-start;
`;

export const NavBar = styled.nav`
    justify-self: flex-end;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 2vw; 
    font-weight: bold;
    font-size: 18px;
   
    a {
        color: #fff;
        text-decoration: none; 
       
        &:hover {
            text-decoration: underline 1.5px;
        }
    }
`;
