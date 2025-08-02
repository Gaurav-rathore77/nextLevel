import Link from "next/link";

export default async function Home({ searchParams }) {
  const search = searchParams.q || "batman";

  // Server-side fetch
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${search}`,
    { cache: "no-store" } // SSR - disable caching
  );

  const data = await res.json();
  const movies = data.Search || [];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🎬 Movie Search App</h1>

      {/* Search form */}
      <form>
        <input
          type="text"
          name="q"
          placeholder="Search movies..."
          defaultValue={search}
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>
          Search
        </button>
      </form>

      {/* Results */}
      <div style={{ marginTop: "20px" }}>
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <Link href={`/movie/${movie.imdbID}`}>
                  {movie.Title} ({movie.Year})
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found!</p>
        )}
      </div>
    </div>
  );
}
