/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "../../components/header";
import MovieBanner from "../../components/movies/movieBanner";
import MoviesCarousel from "../../components/movies/moviesCarousel";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { StyledFooter } from "./styles";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <MovieBanner />
        <MoviesCarousel />
      </main>
      <StyledFooter>
        <div className="footerInfoDiv">
          <div>
            <h4>BAIXE NOSSO APP</h4>
            <div>
              <img
                src="https://e7.pngegg.com/pngimages/2/670/png-clipart-logo-app-store-font-brand-product-app-store-play-store-text-logo.png"
                alt="Logo Aplle Store"
                className="appleStoreLogo"
              />
              <img
                src="https://logodownload.org/wp-content/uploads/2017/04/disponivel-google-play-badge.png"
                alt="Google Play Logo"
                className="googlePlayLogo"
              />
            </div>
          </div>
          <div className="linksDiv">
            <h5>Menu</h5>
            <a href="#">Filmes</a>
            <a href="#">Cinemas</a>
            <a href="#">Eventos</a>
          </div>
        </div>
        <div className="footerInfoDiv">
          <div>
            <h4>SIGA-NOS NAS REDES</h4>
            <div className="socialMediaIcons">
              <span className="faceBookIcon">
                <FiFacebook />
              </span>
              <span className="youTubeIcon">
                <AiOutlineYoutube />
              </span>

              <span className="instagramIcon">
                <FaInstagram />
              </span>
              <span className="linkedInIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div className="linksDiv">
            <h5>Institucional</h5>

            <a href="">Quem Somos</a>
            <a href="">Acessoria de Imprensa</a>
            <a href="">Bootstrap Ingresso.com</a>
            <a href="">Vale-presente Corporativo</a>
            <a href="">Ingresso.com atende</a>
            <a href="">movieID.com</a>
          </div>
        </div>
        <div className="footerInfoDiv">
          <div>
            <h4>PRECISA DE AJUDA</h4>
            <button className="supportButton">ATENDIMENTO</button>
          </div>
          <div className="linksDiv">
            <h5>Políticas</h5>
            <a href="">Privacidade e Segurança</a>
            <a href="">Meia-entrada</a>
            <a href="">Trocas e Cancelamentos</a>
            <a href="">Leis Estaduais e Municipais</a>
            <a href="">Termos de Uso</a>
          </div>
        </div>
        <div className="linksDiv">
          <h5>Duvidas</h5>
          <a href="">Atendimento</a>
          <a href="">Site ou e-mails falsos</a>
          <a href="">Procon-RJ</a>
        </div>
      </StyledFooter>
    </>
  );
};

export default HomePage;
