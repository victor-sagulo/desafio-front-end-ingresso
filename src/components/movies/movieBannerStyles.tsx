import styled from "styled-components";

interface IBannerContainer {
  background: string;
}

export const BannerContainer = styled.div<IBannerContainer>`
  background-color: #070707dc;
  display: flex;
  justify-content: center;
  align-items: center;
  .containerImage {
    position: relative;
    width: 100%;
    height: 300px;
    background: url(${(props) => props.background});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    a {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 9;
    }
  }

  @media screen and (min-width: 768px) {
    height: 400px;
    overflow: hidden;

    .containerImage {
      position: relative;
      width: 70%;
      height: 400px;
      background-size: cover;
      background-position: center;
      box-shadow: inset 0px -41px 51px 38px rgba(0, 0, 0, 0.75);
    }

    .blurDivLeft {
      position: absolute;
      height: 100%;
      width: 50px;
      top: 15px;
      left: -15px;
      filter: blur(10px);
      background-color: #292929;
    }

    .blurDivRight {
      position: absolute;
      height: 100%;
      width: 50px;
      top: 15px;
      right: -15px;
      filter: blur(10px);
      background-color: #292929;
    }
  }
`;

export const BannerInfo = styled.div`
  position: absolute;
  top: 180px;
  left: 10px;

  .featuredMovieTag {
    background-color: #ffa500;
    padding: 5px;
    height: 35px;
    width: 40px;
    font-size: 15px;
  }

  .featuredmovieTitle {
    color: #fff;
    font-size: 20px;
  }

  .genreTag {
    border: 2px solid #fff;
    margin: 5px;
    padding: 5px;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    top: 266px;
  }
`;
