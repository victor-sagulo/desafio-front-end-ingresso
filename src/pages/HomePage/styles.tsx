import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: fit-content;
  padding: 10px 0;
  background-color: #262626;
  color: #fff;

  .footerInfoDiv {
    margin: 0 40px;
    height: fit-content;
  }
  .appleStoreLogo {
    width: 100px;
  }

  .googlePlayLogo {
    width: 100px;
  }

  .linksDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .socialMediaIcons {
    display: flex;
  }

  .faceBookIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 5px;
    padding: 5px;
    font-size: 20px;
    background-color: #005c99;
  }
  .youTubeIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 5px;
    padding: 5px;
    font-size: 20px;
    background-color: #eb0a0a;
  }
  .instagramIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 5px;
    padding: 5px;
    font-size: 20px;
    background-color: #f69227;
  }
  .linkedInIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 5px;
    padding: 5px;
    font-size: 20px;
    background-color: #0576c1;
  }

  .supportButton {
    background: none;
    border: 2px solid #09f;
    color: #09f;
    padding: 10px;
  }

  a {
    margin: 5px;
  }
  .supportButton {
    transition: 0.5s;
    :hover {
      background-color: #09f;
      color: #fff;
    }
  }
  @media screen and (min-width: 768px) {
  }
`;
