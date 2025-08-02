export default async function MovieDetails({ params }) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${params.id}&plot=full`,
    { cache: "no-store" }
  );
  const movie = await res.json();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      {movie.Poster !== "N/A" && (
        <img src={movie.Poster} alt={movie.Title} width="300" />
      )}
    </div>
  );
}
