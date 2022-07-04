import styled from "styled-components";

interface ICityModalProps {
  newHeight?: string;
  newTop?: string;
  newRight?: string;
  newWidth?: string;
  newLeft?: string;
}

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  @media screen and (min-width: 768px) {
    height: 100px;
  }
`;

export const StyledLogo = styled.img`
  width: 20%;
  max-width: 40px;
  min-width: 40px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
`;

export const StyledTopHeader = styled.div`
  width: 100%;
  height: 55px;
  padding: 30px;
  display: flex;
  align-items: center;

  z-index: 1;
  background-color: rgba(25, 25, 25, 0.9);
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    .topHeaderNav {
      display: flex;
      justify-content: space-evenly;
      width: 50%;
    }

    .divInputDesktop {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 250px;
      height: 30px;
      border-radius: 5px;
    }

    .buttonCityDiv {
      position: relative;
      display: flex;
      align-items: center;
    }

    .headerIcons {
      color: #09f;
    }

    input {
      width: 100%;
      ::placeholder {
        padding: 5px;
        font-size: 14px;
      }
    }

    button {
      background: none;
      border: none;
      color: #fff;
      transition: 0.5s;
      :hover {
        border-bottom: 1px solid #09f;
      }
    }
  }
`;

export const StyledBottomHeader = styled.div`
  height: 55px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);

  @media screen and (min-width: 768px) {
    .bottomHeaderNav {
      display: flex;
      gap: 30px;
      margin-left: 56%;
      width: 55%;
    }

    .bottomLinkNav {
      margin: 0 10px;
      width: fit-content;
      transition: 0.5s;
      :hover {
        border-bottom: 1px solid #09f;
      }
    }
  }
`;

export const ModalButton = styled.button`
  width: 30px;
  height: 30px;
  position: relative;
  background: transparent;
  font-size: 20px;
  border: none;
  color: #fff;
  right: 0;
`;

export const StyledMenuModal = styled.div<ICityModalProps>`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  top: ${(props) => props?.newTop};
  width: ${(props) => props?.newWidth};
  left: ${(props) => props?.newLeft};
  background-color: #333;
  z-index: 99;
  right: ${(props) => props?.newRight};
  height: ${(props) => props?.newHeight};

  .headerIcons {
    color: #09f;
  }

  .divInput {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 30px;
    border-radius: 5px;
    margin-top: 10px;
  }

  input {
    width: 80%;
    ::placeholder {
      padding: 5px;
      font-size: 12px;
    }
  }

  .cityOptionButton {
    background: #808080;
    border: 2px solid #09f;
    height: 30px;
    color: #fff;
  }

  .menuIconsButton {
    background: none;
    border: none;
    color: #fff;
    transition: 0.5s;
    :hover {
      border-bottom: 1px solid #09f;
    }
  }

  .buttonClose {
    background: none;
    border: none;
    color: #fff;
    width: 30px;
    height: 30px;
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .buttonCityDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  a {
    transition: 0.5s;
    :hover {
      border-bottom: 1px solid #09f;
    }
  }
`;
