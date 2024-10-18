import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const genreList = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];
const langs = [
  { key: "en", name: "English" },
  { key: "ja", name: "Japan" },
  { key: "ko", name: "Korea" },
];
const years = [];
for (let i = 1992; i <= 2025; i++) years.push(i.toString());
const mediaTypes = ["tv", "movie", "person"];

function SearchForm({ setSearchRequest }) {
  const [inputName, setInputName] = useState("");
  const [genre, setGenre] = useState("All");
  const [language, setLanguage] = useState("All");
  const [mediaType, setMediaType] = useState("All");
  const [year, setYear] = useState("All");

  function handleSubmit(e) {
    e.preventDefault();
    const request = {
      keyword: inputName,
      genre,
      language,
      mediaType,
      year,
    };
    setSearchRequest(request);
  }

  // Reset search
  function handleReset() {
    setGenre("All");
    setInputName("");
    setLanguage("All");
    setYear("All");
    setMediaType("All");
    setSearchRequest({
      keyword: "",
      genre: "All",
      language: "All",
      year: "All",
      mediaType: "All",
    });
  }

  return (
    <form
      className="relative w-[600px] h-[200px] bg-white flex flex-col"
      onSubmit={handleSubmit}>
      <div className="flex justify-between items-center gap-2 p-4 border-b-[1px] border-gray-400 ">
        <input
          type="text"
          className="text-[16px] w-full focus:outline-none"
          placeholder="Which movie do you like?"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
        <FaSearch className="text-gray-600 text-[24px]" />
      </div>
      <div className="flex gap-4 px-4 py-2 border-b-4 border-blue-500">
        <div className="flex flex-col w-1/4 gap-2">
          <label>Genre</label>
          <select
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            className="capitalize border outline-none">
            <option value="All">All</option>
            {genreList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label>Language</label>
          <select
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            className="capitalize border outline-none">
            <option value="All">All</option>
            {langs.map((item) => (
              <option value={item.key} key={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label>Year</label>
          <select
            onChange={(e) => setYear(e.target.value)}
            value={year}
            className="capitalize border outline-none">
            <option value="all">All</option>
            {years.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label>Media Type</label>
          <select
            onChange={(e) => setMediaType(e.target.value)}
            value={mediaType}
            className="capitalize border outline-none">
            <option value="All">All</option>
            {mediaTypes.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex h-auto items-center justify-end p-4 grow">
        <button className="py-1 px-3" type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="bg-blue-500 py-1 px-3 text-white ">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
