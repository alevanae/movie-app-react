import { useEffect, useState } from "react";
import { requests } from "../requests";
function cutString(str, maxChar) {
  return str.length > maxChar ? str.slice(0, maxChar) + "..." : str;
}

function Banner() {
  const [movies, setMovies] = useState([]);

  // phim ngau nhien
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // fetch phim
  useEffect(function () {
    async function fetchMovies() {
      try {
        const res = await fetch(requests.fetchNetflixOriginals);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="w-full relative h-[500px] ">
      <div className="w-full h-full absolute bg-gradient-to-r from-black"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={`${movie?.name}`}
        className="h-full w-full object-cover"
      />
      <div className="text-white w-full top-[40%] absolute pl-8">
        <h2 className="text-[32px]">{movie?.name}</h2>
        <div className="flex gap-2 pt-12">
          <button className="bg-gray-300/50 py-2 px-4 rounded-md">Play</button>
          <button className="bg-gray-300/50 py-2 px-4 rounded-md">
            My List
          </button>
        </div>
        <p className="w-full md:max-w-[75%] lg:max-w-[50%]">
          {movie ? cutString(movie.overview, 300) : undefined}
        </p>
      </div>
    </div>
  );
}

export default Banner;
