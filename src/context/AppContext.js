import React, { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [price, setPrice] = useState(500);
  const [showSidebar, setShowSidebar] = useState(false);
  const [movie, setMovie] = useState({});
  const [service, setService] = useState({});
  const [team, setTeam] = useState({});
  const [blog, setBlog] = useState({});
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token || loggedIn) {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .post(`${process.env.BASE_URL}user/get-user`, { token }, header)
        .then((res) => {
          if (res.data.data) {
            const userinfo = res.data.data;
            setLoggedIn(true);
            setUser(userinfo);
            setLoading(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token, loggedIn]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setLoading(false);
    setLoggedIn(false);
    setUser(null);
  };
  // all values
  const value = {
    price,
    setPrice,
    showSidebar,
    setShowSidebar,
    setMovie,
    team,
    setTeam,
    movie,
    setService,
    service,
    blog,
    setBlog,
    token,
    user,
    loading,
    setLoading,
    logout,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
