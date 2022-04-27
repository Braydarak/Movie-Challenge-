import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/UseQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <div className="search__box">
        <input
          className="search__input"
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button className="search__button" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
