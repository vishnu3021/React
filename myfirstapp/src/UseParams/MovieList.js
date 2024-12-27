import React from "react";
import { Link } from "react-router-dom";
function MovieList() {
  const movies = [
    {
      id: "1",
      name: "Thor4",
      year: "2022",
    },
    {
      id: "2",
      name: "Ben10",
      year: "2022",
    },
  ];
  return (
    <div>
      {movies.map((a, b) => {
        return (
          <ul>
          <Link to={`/moviesList/${a.id}`}>
            <li>{a.name}</li>
          </Link>
        </ul>
        )
      })}
    </div>
  );
}
export default MovieList;
