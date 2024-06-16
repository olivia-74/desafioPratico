import { ContainerFooter, FooterContainer, Logo, ListsContainer, IconsContainer } from "./styledFooter";
import logoSpotify from "../../assets/spotify.svg"
import iconFacebook from "../../assets/facebook.png"
import iconInstagram from "../../assets/instagram.png"
import iconTwitter from "../../assets/twitter.png"

function Footer(){
    return(
      <>
      <FooterContainer>
      <Logo src={logoSpotify} alt="Logo"/>
       
      <ListsContainer>
        <ul>
            <h3>Company</h3>
            <a href="https://www.linkedin.com/in/oliviadresch/">Sobre</a> 
            <a href="https://www.linkedin.com/in/oliviadresch/">Empregos</a>
            <a href="https://www.linkedin.com/in/oliviadresch/">Imprensa</a>
            <a href="https://www.linkedin.com/in/oliviadresch/">Novidades</a>
        </ul>
        <ul>
            <h3>Comunidades</h3>
            <a href="https://www.linkedin.com/in/oliviadresch/">Artistas</a>
            <a href="https://www.linkedin.com/in/oliviadresch/">Desenvolvedores</a>
            <a href="https://www.linkedin.com/in/oliviadresch/">Marcas</a>
        </ul>
        <ul>
            <h3>Links Uteis</h3>
            <a href="https://www.linkedin.com/in/oliviadresch/">Ajuda</a>
            <a href="https://www.linkedin.com/in/oliviadresch/">Presentes</a>
            <a href="https://www.linkedin.com/in/oliviadresch/">Player na web</a>
        </ul>
      </ListsContainer>
      
      <IconsContainer>
        <a href="https://www.linkedin.com/in/oliviadresch/"><img src={iconFacebook} alt="Facebook"/></a>
        <a href="https://www.linkedin.com/in/oliviadresch/"><img src={iconInstagram} alt="Instagram"/></a>
        <a href="https://www.linkedin.com/in/oliviadresch/"><img src={iconTwitter} alt="Twitter"/></a>
      </IconsContainer>

    </FooterContainer>
        </>
    )
}

export default Footer;

