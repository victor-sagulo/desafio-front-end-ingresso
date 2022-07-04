import { FaSistrix, FaRegUser, FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbMapPin } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import {
  StyledHeader,
  ModalButton,
  StyledLogo,
  StyledTopHeader,
  StyledMenuModal,
  StyledBottomHeader,
} from "./styles";
import { useEffect, useState } from "react";
import { useMovies } from "../../providers/MoviesProviders";
import { MovieProviderData } from "../../@types";
const Header = () => {
  const [modalMenu, setModalMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [modalCitySelect, setModalCitySelect] = useState(false);

  const { stateId, setStateId } = useMovies() as MovieProviderData;

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      {width < 768 ? (
        <StyledHeader>
          <StyledTopHeader>
            <StyledLogo
              src="https://play-lh.googleusercontent.com/aAh_erLSqnztKNtJg6VFKkT1JkgIC1Vx9Mp2K2qg5ahtFUanQxj8G0m1raNKji5cDW8"
              alt="Logo"
            />

            <ModalButton onClick={() => setModalMenu(!modalMenu)}>
              <FaBars />
            </ModalButton>
            {modalMenu && (
              <StyledMenuModal
                newHeight="500px"
                newRight="0"
                newTop="30px"
                newWidth="200px"
              >
                <button
                  className="buttonClose"
                  onClick={() => setModalMenu(!modalMenu)}
                >
                  <AiFillCloseCircle />
                </button>

                <div className="divInput">
                  <input
                    type="text"
                    placeholder="Pesquise por filmes, cinemas"
                  />
                  <button className="menuIconsButton">
                    <FaSistrix className="headerIcons" />
                  </button>
                </div>
                <div className="buttonCityDiv">
                  <button
                    className="menuIconsButton"
                    onClick={() => setModalCitySelect(!modalCitySelect)}
                  >
                    {stateId === 2 ? "Rio de Janeiro" : "São Paulo"}{" "}
                    <TbMapPin className="headerIcons" />{" "}
                    {modalCitySelect ? <BsChevronUp /> : <BsChevronDown />}
                  </button>
                  {modalCitySelect && (
                    <button
                      className="cityOptionButton"
                      onClick={() => {
                        stateId === 1 ? setStateId(2) : setStateId(1);
                        setModalCitySelect(false);
                      }}
                    >
                      {stateId === 2 ? "São Paulo" : "Rio de Janeiro"}{" "}
                      <TbMapPin className="headerIcons" />
                    </button>
                  )}
                </div>
                <button className="menuIconsButton">
                  Olá, frontend <FaRegUser className="headerIcons" />
                </button>
                <button className="menuIconsButton">
                  Atendimento <BiHelpCircle className="headerIcons" />
                </button>
                <a href="#">FILMES</a>
                <a href="#">CINEMAS</a>
                <a href="#">EVENTOS</a>
                <a href="#">ROCK IN RIO</a>
              </StyledMenuModal>
            )}
          </StyledTopHeader>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <div>
            <StyledTopHeader>
              <StyledLogo
                src="https://ingresso-a.akamaihd.net/marketing-desenvolvimento/assets/ingresso-marca/ingresso-marca-horizontal.png"
                alt="Logo"
              />
              <nav className="topHeaderNav">
                <div className="divInputDesktop">
                  <input
                    type="text"
                    placeholder="Pesquise por filmes, cinemas"
                  />
                  <button>
                    <FaSistrix className="headerIcons" />
                  </button>
                </div>
                <div className="buttonCityDiv">
                  {modalCitySelect && (
                    <StyledMenuModal
                      newHeight="60px"
                      newRight="20px"
                      newTop="40px"
                      newWidth="160px"
                    >
                      <button
                        onClick={() => {
                          stateId === 1 ? setStateId(2) : setStateId(1);
                          setModalCitySelect(false);
                        }}
                      >
                        {stateId === 2 ? "São Paulo" : "Rio de Janeiro"}{" "}
                        <TbMapPin className="headerIcons" />
                      </button>
                    </StyledMenuModal>
                  )}
                  <button onClick={() => setModalCitySelect(!modalCitySelect)}>
                    {stateId === 2 ? "Rio de Janeiro" : "São Paulo"}{" "}
                    <TbMapPin className="headerIcons" />
                    {modalCitySelect ? (
                      <BsChevronUp className="headerIcons" />
                    ) : (
                      <BsChevronDown className="headerIcons" />
                    )}
                  </button>
                </div>
                <button>
                  Olá, frontend <FaRegUser className="headerIcons" />
                </button>
                <button>
                  Atendimento <BiHelpCircle className="headerIcons" />
                </button>
              </nav>
            </StyledTopHeader>
          </div>
          <StyledBottomHeader>
            <nav className="bottomHeaderNav">
              <a href="#" className="bottomLinkNav">
                FILMES
              </a>
              <a href="#" className="bottomLinkNav">
                CINEMAS
              </a>
              <a href="#" className="bottomLinkNav">
                EVENTOS
              </a>
              <a href="#" className="bottomLinkNav">
                ROCK IN RIO
              </a>
            </nav>
          </StyledBottomHeader>
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
