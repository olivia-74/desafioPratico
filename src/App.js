import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./styledGlobal";
import Banner from "./components/Banner/Banner";
import Carrossel from "./components/Carrossel/Carrossel";
import Galeria from "./components/Galeria/Galeria";
import Playlist from "./components/Playlist/Playlist";


function App() {
  const TopCarrossel = -20; // const definida no Banner.js (ajustes)
  const PaddingCarrossel = 15;

  return (
    <>
      <GlobalStyle/>
      <Header/>
      {/* tentando reaproveitar o banner */}
      <Banner TopBanner={TopCarrossel} PaddingBanner={PaddingCarrossel} > 
        <Carrossel/>
      </Banner>
      <Galeria/>
      <Banner >
        <Playlist/>
      </Banner>
      <Footer/>
    </>
  );
}

export default App;
