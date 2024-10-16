import { useState, useEffect, useMemo } from "react";

import data from "../data/data.json";

const sortMoviesByDate = (movies) => {
  return movies.sort((a, b) => new Date(b.Date) - new Date(a.Date));
};

const getStoredFeaturedMovie = () => {
  const featuredMovieId = sessionStorage.getItem("featuredMovie");
  return featuredMovieId ? featuredMovieId : null;
};

const saveFeaturedMovie = (movieId) => {
  sessionStorage.setItem("featuredMovie", movieId);
};

export const useTrendingNow = () => {
  const [sortedMovies, setSortedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(data.Featured);

  const movies = useMemo(() => data.TendingNow.slice(0, 50), []);

  useEffect(() => {
    const storedFeaturedMovieId = getStoredFeaturedMovie();
    const sorted = sortMoviesByDate(movies);

    if (storedFeaturedMovieId) {
      const featuredMovie = sorted.find(
        (movie) => movie.Id === storedFeaturedMovieId
      );
      if (featuredMovie) {
        setSelectedMovie(featuredMovie);
        const updatedMovies = sorted.filter(
          (movie) => movie.Id !== featuredMovie.Id
        );
        setSortedMovies(updatedMovies);
      } else {
        setSortedMovies(sorted);
      }
    } else {
      setSortedMovies(sorted);
    }
  }, [movies]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    saveFeaturedMovie(movie.Id);

    setTimeout(() => {
      setSelectedMovie((prevMovie) => ({
        ...prevMovie,
        isVideoPlaying: true,
      }));
    }, 2000);
  };

  return { sortedMovies, selectedMovie, handleMovieSelect };
};
