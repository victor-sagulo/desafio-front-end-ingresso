import { createContext, useContext, useState } from "react";
import axios from "axios";
import { MoviesProviderProps, MovieProviderData, EventList } from "../@types";

export const MoviesContext = createContext<MovieProviderData | null>(null);

const useMovies = () => {
  const context = useContext(MoviesContext);

  return context;
};

const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [moviesList, setMoviesList] = useState<EventList[] | []>([]);
  const [stateId, setStateId] = useState(1);

  const ListAllMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api-content.ingresso.com/v0/events/city/${stateId}/partnership/kinoplex?limit=15`
      );
      console.log(data[0]);
      setMoviesList(data.items);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(moviesList);

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        stateId,
        setMoviesList,
        ListAllMovies,
        setStateId,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export { MoviesProvider, useMovies };
