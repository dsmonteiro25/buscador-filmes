import { useState } from "react";
import { films } from "./data/films";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredMovies = films.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="ghibli-title">Studio Ghibli Filmes</h1>

      <div className="search-wrapper">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="ghibli-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
