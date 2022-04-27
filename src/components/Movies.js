import { useEffect, useState } from "react";
import { get } from "../utils/HttpClient";
import { MovieCard } from "./MovieCard";
import { useQuery } from "../hooks/UseQuery";
import "./Movies.scss";
import { Spinner } from "./Spinner";

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "discover/movie";
    get(searchUrl).then(data => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <ul className="movies__grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
