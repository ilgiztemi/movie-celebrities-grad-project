import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CelebritiesContext = createContext();

export const CelebritiesProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isModal, setIsModal] = useState(false);

  console.log(movieData);
  const fetchData = () => {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${page}`;
    axios.get(url).then((data) => {
      setTotal(data.data.total_pages);
      setPage(data.data.page);
      console.log(data.data);
      setMovieData(data.data.results);
    });
  };
  console.log("total", total);
  console.log("page", page);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <CelebritiesContext.Provider
      value={{
        movieData,
        setMovieData,
        page,
        setPage,
        total,
        isModal,
        setIsModal
      }}
    >
      {children}
    </CelebritiesContext.Provider>
  );
};

export const useCelebrities = () => useContext(CelebritiesContext);
