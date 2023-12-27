import React, { useEffect, useState } from "react";
import "./style.css";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPe_Page] = useState<number>(5);
  const [totalItems, setTotalItens] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const paginateHandler = (item: number): void => {
    setCurrentPage(item);
  };

  const nextHandler = (): void => {
    const lastItemOfPage = page * perPage;
    if (lastItemOfPage === currentPage) {
      setPage(page + 1);
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevHandler = (): void => {
    const firstItemOfPage = page * perPage - perPage + 1;

    if (firstItemOfPage === currentPage) {
      setPage(page - 1);
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const indexOfLastItem = page * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const itemsToShow = totalItems.slice(indexOfFirstItem, indexOfLastItem);
    setVisibleItems(itemsToShow);
  }, [page]);

  return (
    <div>
      <h1 className="title">Pagination</h1>
      <div className="current_page">
        <h3>
          This is {currentPage} of page {page}
        </h3>
      </div>
      <div className="buttons">
        <button disabled={currentPage === 1} onClick={prevHandler}>
          prev
        </button>
        {page > 1 && <button>...</button>}
        {visibleItems.map((item, index) => {
          return (
            <button
              className={currentPage === item ? "active" : ""}
              onClick={() => paginateHandler(item)}
              key={index}
            >
              {item}
            </button>
          );
        })}
        {page < totalItems.length / perPage && <button>...</button>}
        <button disabled={currentPage === 20} onClick={nextHandler}>
          next
        </button>
      </div>
    </div>
  );
};

export default App;
