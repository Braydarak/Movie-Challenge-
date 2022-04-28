import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export function Search() {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      window.location.reload();
    }
  }

  function handleClick(e) {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <Link to="/">
        <FaHome
          className="search__icon"
          onClick={() => (window.location.href = `/`)}
        />
      </Link>
      <div className="search__box">
        <input
          className="search__input"
          type="text"
          value={null}
          onChange={e => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button className="search__button" type="submit" onClick={handleClick}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
