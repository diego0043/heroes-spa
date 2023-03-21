import { useParams } from "react-router-dom";
import { useHeroe } from "../hooks/useHeroe";


export const HeroComp = () => {
  const heroId = useParams();
  const { hero } = useHeroe();


  return (
    <>
      <div className="container flex justify-content-center">
        <div className="row">
          <div className="col-12">
            {heroId}
          </div>
        </div>
      </div>
    </>
  );
};
