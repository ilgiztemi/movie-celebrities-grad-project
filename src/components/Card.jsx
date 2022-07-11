import BasicModal from "./BasicModal";
import { useCelebrities } from "../context/CelebritiesContext";
const imgUrl = "https://image.tmdb.org/t/p/w185/";

const Card = () => {
  const { movieData, isModal, setIsModal } = useCelebrities();
  // const handleModal = () => {
  //   setIsModal(true);
  // };
  return (
    <div className="container">
      <div className="row">
        {movieData.map((movie) => (
          <div
            className="col col-lg-3 col-md-4 col-sm-6 col-12 card"
            onClick={() => setIsModal(true)}
          >
            <img src={imgUrl + movie.profile_path} alt="" />
            <h5>{movie.name}</h5>

            <BasicModal movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
