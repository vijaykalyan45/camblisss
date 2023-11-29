
import { useState, useEffect } from 'react';
import axios from 'axios';

const usePortFolioFatching = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        axios
          .get(`${process.env.BASE_URL}portfolio/all-portfolio`)
          .then((res) => {
            setPortfolios(res.data);
          })
          .catch((err) => console.log(err));
      }, []);

  return portfolios;
};

export default usePortFolioFatching;