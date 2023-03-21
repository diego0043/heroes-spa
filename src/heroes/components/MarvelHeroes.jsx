import React, { useEffect, useState } from "react";
import { useHeroe } from "../hooks/useHeroe";
import { HeroesList } from "./HeroesList";

export const MarvelHeroes = () => {
  const { heroes, getHeroesByCompany, getData } = useHeroe();
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    setPage(page + 12);
  };

  const handlePrevPage = () => {
    page > 0 ? setPage(page - 12) : setPage(0);
  };

  const getAllHeroes = async () => {
    await getHeroesByCompany(page);
  };

  useEffect(() => {
    getAllHeroes();
  }, [page]);

  return (
    <>
      <div className="container">
        {heroes.length > 0 && (
          <HeroesList heroes={heroes.slice(page, page + 12)} />
        )}
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="shadow">
          <ul className="pagination">
            <li className="page-item">
              <button onClick={handlePrevPage} className="page-link">
                Previous
              </button>
            </li>
            <li className="page-item">
              <button onClick={handleNextPage} className="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
