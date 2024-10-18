import { useEffect, useState } from "react";
import DetailMovie from "./DetailMovie";

function Row({ request, title, requestBody }) {
  const [movies, setMovies] = useState([]);
  const [detailMovie, setDetailMovie] = useState(null); // xu ly logic khi click vao phim
  function handleDetailMovie(movie) {
    if (detailMovie === movie) {
      setDetailMovie(null);
      return;
    }
    setDetailMovie(movie);
  }
  useEffect(
    function () {
      async function searchMovie() {
        // Reset in search
        if (
          requestBody.keyword === "" &&
          requestBody.genre === "All" &&
          requestBody.year === "All" &&
          requestBody.mediaType === "All" &&
          requestBody.language === "All"
        ) {
          setDetailMovie(null);
          setMovies([]);
          return;
        }
        const res = await fetch(request, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
        const data = await res.json();

        setMovies(data.data);
      }
      async function fetchMovie() {
        const res = await fetch(request);
        const data = await res.json();
        const fetchedMovies = data.results;
        setMovies(fetchedMovies);
      }
      if (requestBody) searchMovie();
      else fetchMovie();
    },
    [request, requestBody]
  );

  // dung transition-transform transform hover:scale-110 tao hieu ung hover
  const specialRowStyles =
    "w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] transition-transform transform hover:scale-110 inline-block px-2";
  const normalRowStyles =
    "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] transition-transform transform hover:scale-110 inline-block";
  let currentRowStyles = normalRowStyles;
  if (title === "search" || title === "") currentRowStyles = specialRowStyles;

  return (
    <div className="px-4 lg:py-16 md:py-3 py-1">
      <h2 className="text-white md:text-lg lg:text-[32px] font-bold">
        {title === "search" ? "" : title}
      </h2>
      <ul
        className={
          /** dung overflow-x-scroll de keo ngang */
          `${
            title === "search" ? "" : "overflow-x-scroll whitespace-nowrap"
          } w-full py-4`
        }>
        {movies?.map((movie, i) => (
          <li
            key={`${title}${i}`}
            className={currentRowStyles}
            onClick={() => {
              handleDetailMovie(movie);
            }}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                title === "" || title === "search"
                  ? movie?.poster_path
                  : movie?.backdrop_path
              }`}
              alt={`${movie?.name}`}
              className="w-full h-auto block"
            />
          </li>
        ))}
      </ul>
      {detailMovie && <DetailMovie movie={detailMovie} />}
    </div>
  );
}

export default Row;
