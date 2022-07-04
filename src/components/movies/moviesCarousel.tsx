/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { MovieProviderData } from "../../@types";
import { useMovies } from "../../providers/MoviesProviders";
import { CarouselSection } from "./moviesCarouselStyles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./movieCard";

const MoviesCarousel = () => {
  const { moviesList, stateId, ListAllMovies } =
    useMovies() as MovieProviderData;

  useEffect(() => {
    ListAllMovies();
  }, [stateId]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 2999, min: 2000 },
      items: 7,
      partialVisibilityGutter: 20,
    },
    notebook: {
      breakpoint: { max: 1999, min: 1440 },
      items: 5,
      partialVisibilityGutter: 20,
    },
    notebookMedium: {
      breakpoint: { max: 1299, min: 1090 },
      items: 4,
      partialVisibilityGutter: 10,
    },
    notebookSmall: {
      breakpoint: { max: 1089, min: 1024 },
      items: 3,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1023, min: 880 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    tabletSmall: {
      breakpoint: { max: 879, min: 768 },
      items: 2,
      partialVisibilityGutter: 100,
    },
    largeMobile: {
      breakpoint: { max: 767, min: 550 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobileMedium: {
      breakpoint: { max: 549, min: 450 },
      items: 1,
      partialVisibilityGutter: 180,
    },
    mobile: {
      breakpoint: { max: 449, min: 350 },
      items: 1,
      partialVisibilityGutter: 100,
    },
    mobileSmall: {
      breakpoint: { max: 349, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  };

  return (
    <CarouselSection>
      <div className="moviesListDiv">
        <h3>EM CARTAZ</h3>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          autoPlaySpeed={100000}
          itemClass="carouselItem"
          swipeable={true}
          draggable={true}
          removeArrowOnDeviceType={[
            "mobile",
            "mobileSmall",
            "largeMobile",
            "mobileMedium",
            "tabletSmall",
            "tablet",
          ]}
          partialVisbile={true}
        >
          {moviesList?.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
        <div className="shadowDiv" />
      </div>
    </CarouselSection>
  );
};

export default MoviesCarousel;
