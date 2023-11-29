import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieFatching = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}movie/all-movie`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return movies;
};

export default useMovieFatching;
