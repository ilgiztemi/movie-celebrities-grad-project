import "./styles.css";
import Pagination from "./components/Pagination";
import Card from "./components/Card";
import { useCelebrities } from "./context/CelebritiesContext";

export default function App() {
  const { page } = useCelebrities();
  return (
    <div className="App">
      <h1>Movie Celebrities</h1>
      <Pagination />
      <h3>
        Showing results {page * 20 + 1} / {(page + 1) * 20 + 1}
      </h3>
      <Card />
    </div>
  );
}
