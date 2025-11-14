const PaginationPage = ({ pages, currentPage, nextPage }) => {
  const total = pages + 1; // your original behavior

  const generatePages = () => {
    const result = [];

    const show = new Set();

    // Always show first 3
    show.add(1);
    show.add(2);
    show.add(3);

    // Always show last 3
    show.add(total);
    show.add(total - 1);
    show.add(total - 2);

    // Middle window around current page
    for (let n = currentPage - 1; n <= currentPage + 1; n++) {
      if (n > 0 && n <= total) show.add(n);
    }

    // Convert set → sorted array
    const sorted = Array.from(show).sort((a, b) => a - b);

    // Insert dots between disjoint ranges
    const finalList = [];
    for (let i = 0; i < sorted.length; i++) {
      if (i === 0) {
        finalList.push(sorted[i]);
      } else {
        if (sorted[i] !== sorted[i - 1] + 1) {
          finalList.push("...");
        }
        finalList.push(sorted[i]);
      }
    }

    return finalList;
  };

  const pagesToShow = generatePages();

  return (
    <div className="container">
      <div className="pagination">

        {currentPage > 1 && (
          <li onClick={() => nextPage(currentPage - 1)}>
            <a href="#" className="page-nav">Prev</a>
          </li>
        )}

        {pagesToShow.map((p, idx) => (
          <li
            key={idx}
            className="pageNum"
            onClick={() => p !== "..." && nextPage(p)}
          >
            {p === "..." ? (
              <span>...</span>
            ) : (
              <a href="#" className={p === currentPage ? "active-page" : "pageNum"}>
                {p}
              </a>
            )}
          </li>
        ))}

        {currentPage < total && (
          <li onClick={() => nextPage(currentPage + 1)}>
            <a href="#" className="page-nav">Next</a>
          </li>
        )}
      </div>
    </div>
  );
};

export default PaginationPage;
