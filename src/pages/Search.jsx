import { useState } from "react";
import ResultsList from "../comp/ResultsList";
import SearchForm from "../comp/SearchForm";

function Search() {
  const [searchRequest, setSearchRequest] = useState({
    keyword: "",
    genre: "All",
    language: "All",
    year: "All",
    mediaType: "All",
  });

  return (
    <div>
      <div className="flex items-end justify-center h-[300px]">
        <SearchForm setSearchRequest={setSearchRequest} />
      </div>
      <ResultsList searchRequest={searchRequest} />
    </div>
  );
}

export default Search;
