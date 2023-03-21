import React from "react";
import { Link } from "react-router-dom";

export const ButtonHome = () => {
  return (
    <>
      <Link to="/search">
        <button className="btn-home shadow">Start hero search</button>
      </Link>
    </>
  );
};
