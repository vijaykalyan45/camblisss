import axios from "axios";
import { useEffect, useState } from "react";

 export const useServicesFatchingData = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
          .get(`${process.env.BASE_URL}service/all-service`)
          .then((res) => {
            setServices(res.data);
          })
          .catch((err) => console.log(err));
      }, []);
    

  return services;
};

export default useServicesFatchingData;