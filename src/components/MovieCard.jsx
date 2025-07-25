export default function MovieCard({ movie }) {
  return (
    <div className="ghibli-card">
      <img src={movie.image} alt={movie.title} className="ghibli-card-img" />
      <div className="ghibli-card-content">
        <h2 className="ghibli-card-title">{movie.title}</h2>
        <p className="ghibli-card-director">🎬 Diretor: {movie.director}</p>
        <p className="ghibli-card-date">📅 {movie.release_date}</p>
        <p className="ghibli-card-description">
          {movie.description.slice(0, 120)}...
        </p>
      </div>
    </div>
  );
}
