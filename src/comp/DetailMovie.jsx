import { useEffect, useState } from "react";
import { API_KEY, domain } from "../requests";
import YouTube from "react-youtube";
function cutString(str, maxChar) {
  return str.length > maxChar ? str.slice(0, maxChar) + "..." : str;
}
// https://api.themoviedb.org/3/movie/533535/videos?api_key=2bec0f61492295dcc56b5a9be0bf5ac5
function DetailMovie({ movie }) {
  const [trailer, setTrailer] = useState(null);
  const linkTrailer = `${domain}/movie/${movie?.id}/videos?api_key=${API_KEY}`;

  //Trailer config
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  // Pick Trailer or Teaser

  // fetch trailer
  useEffect(
    function () {
      async function fetchTrailer() {
        try {
          const res = await fetch(linkTrailer);
          const data = await res.json();
          if (data) {
            setTrailer(data.results[0]);
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchTrailer();
    },
    [linkTrailer]
  );

  return (
    <div className="w-full h-[500px] flex  justify-between p-4 pt-8">
      <div className="w-[48%] text-white">
        <h1 className="text-[32px] font-bold py-8 border-b-4 border-gray-400">
          {movie?.title || movie?.original_name}
        </h1>
        <div className="py-4 font-bold">
          <p>Release date: {movie?.release_date}</p>
          <p>Vote: {movie?.vote_average} / 10</p>
        </div>

        <p className="text-gray-400">{cutString(movie?.overview, 300)}</p>
      </div>
      <div className="w-[48%]">
        {
          /** khong co trailer, thi thay bang backdrop image */
          trailer ? (
            <YouTube videoId={trailer.key} opts={opts} />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={`${movie?.name}`}
              className="h-400 w-full object-cover"
            />
          )
        }
      </div>
    </div>
  );
}

export default DetailMovie;
