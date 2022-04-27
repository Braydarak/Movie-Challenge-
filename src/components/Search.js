import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/UseQuery";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <Link to="/">
        <FaHome className="search__icon" />
      </Link>
      <div className="search__box">
        <input
          className="search__input"
          type="text"
          value={search}
          onChange={e => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
        />
        <button className="search__button" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
