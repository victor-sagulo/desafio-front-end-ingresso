import { EventList } from "../../@types";
import { DivMovieInfo, StyledMovieCard } from "./movieCardStyles";

interface IMovieCard {
  movie: EventList;
}

const MovieCard = ({ movie }: IMovieCard) => {
  const portraitUrl =
    movie.images[0].type === "PosterPortrait"
      ? movie.images[0].url
      : movie.images[1].url;

  const movieCardLink =
    movie.trailers.length !== 0 ? movie.trailers[0].url : movie.siteURL;

  return (
    <StyledMovieCard background={portraitUrl}>
      <a href={movieCardLink} rel="noopener noreferrer" target="_blank">
        <img src={portraitUrl} alt={movie.title} />]
      </a>
      <DivMovieInfo>
        <span className="featuredMovieTag">Em Alta</span>
        <p className="carouselMovieTitle">{movie.title}</p>
      </DivMovieInfo>
    </StyledMovieCard>
  );
};

export default MovieCard;
