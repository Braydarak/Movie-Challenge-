import "./MovieDetails.scss";
import { get } from "../utils/HttpClient";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!movie) {
    return null;
  };

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className="details__container">
      <img className="details__image" src={imageUrl} alt={movie.title} />
      <div className="details__image">
        <p className="details__title">
          <strong>{movie.title}</strong>
        </p>
        <p><strong className="details__strong">Description</strong></p>
        <p className="details__description">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}