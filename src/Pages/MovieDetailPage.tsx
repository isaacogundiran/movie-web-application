import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch top 10 movies from TMDB API
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: 'YOUR_API_KEY',
          language: 'en-US',
          page: 1,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
