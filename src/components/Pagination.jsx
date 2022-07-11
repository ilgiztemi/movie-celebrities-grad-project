import { useCelebrities } from "../context/CelebritiesContext";

const Pagination = () => {
  const { page, setPage, total } = useCelebrities();

  return (
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" onClick={() => setPage(1)}>
            {"<<"}
          </a>
        </li>
        <li class="page-item">
          <a
            disabled={page < 1}
            class="page-link"
            href="#"
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            Previous
          </a>
        </li>
        <li class="page-item">
          <a
            disabled={page === 1}
            class="page-link"
            href="#"
            onClick={() => setPage(page > 4 ? page - 4 : page)}
          >
            {page}
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            onClick={() => setPage(page > 3 ? page - 3 : page + 1)}
          >
            {page + 1}
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            onClick={() => setPage(page > 2 ? page - 2 : page + 2)}
          >
            {page + 2}
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            onClick={() => setPage(page > 1 ? page - 1 : page + 3)}
          >
            {page + 3}
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" onClick={() => setPage(page + 4)}>
            {page + 4}
          </a>
        </li>
        <li class="page-item">
          <a
            disabled={page >= total ? false : true}
            class="page-link"
            href="#"
            onClick={() => setPage((prev) => (prev < total ? prev + 1 : prev))}
          >
            Next
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" onClick={() => setPage(total)}>
            {">>"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
