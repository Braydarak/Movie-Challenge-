import { Link } from "react-router-dom";
import "./MovieCard.scss";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="movie__card " onClick={() => (window.location.href = `/movies/${movie.id}`)}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={166}
          height={248}
          className="movie__image"
          src={imageUrl}
          alt={movie.title}
        />
        <div className="movie__vote">{movie.vote_average}</div>
      </Link>
      <div>{movie.title}</div>
    </li>
  );
}

