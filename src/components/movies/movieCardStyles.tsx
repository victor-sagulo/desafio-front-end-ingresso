import styled from "styled-components";

interface ICardImgContainer {
  background: string;
}

export const StyledMovieCard = styled.div<ICardImgContainer>`
  width: 18%;
  height: 350px;
  min-width: 220px;
  max-width: 250px;
  display: flex;
  position: relative;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    img {
      transition: 0.3s;
      width: 18%;
      height: 350px;
      min-width: 220px;
      max-width: 250px;
    }
    :hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`;

export const DivMovieInfo = styled.div`
  position: absolute;
  top: 260px;
  left: 10px;

  .featuredMovieTag {
    background-color: #ffa500;
    padding: 5px;
    height: 35px;
    width: 40px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  .carouselMovieTitle {
    color: #fff;
    margin-top: 10px;
    font-weight: bold;
  }
`;
