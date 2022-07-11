import { useCelebrities } from "../context/CelebritiesContext";

const Pagination = () => {
  const { page, setPage, total } = useCelebrities();

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" href="#" onClick={() => setPage(1)}>
            {"<<"}
          </button>
        </li>
        <li className="page-item">
          <button
            disabled={page < 1}
            className="page-link"
            href="#"
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            disabled={page === 1}
            className="page-link"
            href="#"
            onClick={() => setPage(page > 4 ? page - 4 : page)}
          >
            {page}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            onClick={() => setPage(page > 3 ? page - 3 : page + 1)}
          >
            {page + 1}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            onClick={() => setPage(page > 2 ? page - 2 : page + 2)}
          >
            {page + 2}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            onClick={() => setPage(page > 1 ? page - 1 : page + 3)}
          >
            {page + 3}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            onClick={() => setPage(page + 4)}
          >
            {page + 4}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            onClick={() => setPage((prev) => (prev < total ? prev + 1 : prev))}
          >
            Next
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" href="#" onClick={() => setPage(total)}>
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
