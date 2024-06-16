import { HeaderContainer, Logo, NavBar } from './styledHeader';
import logoSpotify from "../../assets/spotify.svg"



function Header(){
    return(
        <>
        <HeaderContainer>
            <Logo src={logoSpotify} alt="Logo"/>
            <NavBar>
            
                <p><a href="https://www.linkedin.com/in/oliviadresch/">Premium</a></p>
                <a href="https://www.linkedin.com/in/oliviadresch/">Ajuda</a>
                <a href="https://www.linkedin.com/in/oliviadresch/">Baixar</a>
                <p>|</p>
                <a href="https://www.linkedin.com/in/oliviadresch/">Entrar</a>
                
            </NavBar>
        </HeaderContainer>
        </>
    )
}

export default Header;