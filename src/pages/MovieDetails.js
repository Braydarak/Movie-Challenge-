import "./MovieDetails.scss";
import { get } from "../utils/HttpClient";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then(data => {
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
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
      <div className="details__container">
        <Link to="/">
          <FaHome
            className="details__icon"
            onClick={() => (window.location.href = `/`)}
          />
        </Link>
        <img className="details__image" src={imageUrl} alt={movie.title} />
        <div className="details__image">
          <p className="details__title">
            <strong>{movie.title}</strong>
          </p>
          <p className="details__genres">
            {movie.genres.map(genre => genre.name).join(", ")}
          </p>
          <p className="details__date">{movie.release_date}</p>
          <p>
            <strong className="details__strong">Storyline</strong>
          </p>
          <p className="details__description">{movie.overview}</p>
        </div>
      </div>
  );
}
