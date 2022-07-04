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
      breakpoint: { max: 3000, min: 2000 },
      items: 7,
      partialVisibilityGutter: 20,
    },
    notebook: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    largeMobile: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
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
