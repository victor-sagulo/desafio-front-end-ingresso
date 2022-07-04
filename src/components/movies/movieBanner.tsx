import { MovieProviderData } from "../../@types";
import { useMovies } from "../../providers/MoviesProviders";
import { BannerContainer, BannerInfo } from "./movieBannerStyles";

const MovieBanner = () => {
  const { moviesList } = useMovies() as MovieProviderData;

  const movieLink =
    moviesList[3]?.trailers.length !== 0
      ? moviesList[3]?.trailers[0].url
      : moviesList[3]?.siteURL;

  return (
    <BannerContainer background={moviesList[3]?.images[1]?.url}>
      <div className="containerImage">
        <a href={movieLink} rel="noopener noreferrer" target="_blank" />
        <div className="blurDivLeft" />
        <div className="blurDivRight" />
        <BannerInfo>
          <span className="featuredMovieTag">EM ALTA</span>
          <h3 className="featuredmovieTitle">{moviesList[0]?.title}</h3>
          {moviesList[0]?.genres.map((genre) => (
            <span className="genreTag" key={genre}>
              {genre}
            </span>
          ))}
        </BannerInfo>
      </div>
    </BannerContainer>
  );
};

export default MovieBanner;
