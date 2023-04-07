import React, { useEffect } from "react";
import { NotHeroe } from "../../ui/components/NotHeroe";
import { useHeroe } from "../hooks/useHeroe";
import { CardDetail } from "./CardDetail";

export const HeroDetail = ({ id }) => {
  const { getHeroe, heroe } = useHeroe();

  useEffect(() => {
    getHeroe(id);
  }, []);

  return (
    <>
      {Object.entries(heroe).length === 0 ? (
        <NotHeroe />
      ) : (
        <div className="container mt-1">
          <div className="row">
            <h3 className="fw-bold text-center mb-4 d-block d-lg-none d-xl-none">
              {heroe.name}
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-12 col-sm-12 container-img-detail">
              <img
                className="shadow rounded float-start img-detail animate__animated animate__fadeInLeft"
                src={heroe.images.md}
                alt={heroe.name}
              />
            </div>
            <div className="col-lg-8 col-xl-8 col-xll-8 col-md-12 col-sm-12">
              <h3 className="fw-bold text-center mb-4 d-none d-lg-block d-xl-block">
                {heroe.name}
              </h3>
              <CardDetail detail={heroe} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
