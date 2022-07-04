import styled from "styled-components";

export const CarouselSection = styled.section`
  background-color: #4d4d4d;
  padding: 15px;
  display: flex;
  justify-content: flex-end;

  h3 {
    color: #fff;
  }

  .moviesListDiv {
    width: 100%;
  }

  .react-multi-carousel-list {
    width: 100%;
  }

  .shadowDiv {
    box-shadow: inset -200px 0px 136px -115px #000000a9;
    width: 240px;
    height: 350px;
    position: absolute;
    top: 375px;
    right: 0px;
    background: transparent;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
    padding: 10px 0;
    .moviesListDiv {
      width: 85%;
    }

    .shadowDiv {
      top: 470px;
      box-shadow: inset -200px 0px 136px -115px #000000e3;
    }
  }
`;

// export const StyledMovieCarousel = styled.ul`
//   display: flex;
//   overflow-y: hidden;
//   overflow-x: scroll;
//   width: 100%;
//   height: 360px;
//   /* ::-webkit-scrollbar {
//     width: "7px";
//   }
//   ::-webkit-scrollbar-thumb {
//     background: "#DBDBDB";
//     border-radius: "4px";
//     background-clip: "padding-box";
//   } */
// `;
