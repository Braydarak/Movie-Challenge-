import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/UseDebounce";
import { useQuery } from "../hooks/UseQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedsearch = useDebounce(search, 400);

  return (
    <div>
      <Search />
      <Movies key={debouncedsearch} search={debouncedsearch} />
    </div>
  );
}
