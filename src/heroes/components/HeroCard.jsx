import { Link } from "react-router-dom";
import { useHeroe } from "../hooks/useHeroe";

export const HeroCard = ({ name, fullName, url, company, hero }) => {
  const urlHero = `hero/${hero.id}`;
  const { setHeroeActual } = useHeroe();
  return (
    <>
      <div className="card card-size mb-2 mx-2 shadow col-3">
        <div className="container-img">
          <img height="200px" src={url} className="card-img-top img-size" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <span>
              {fullName != "" ? fullName : "Name not available"} | {company}
            </span>
          </p>
          <Link to={urlHero}>
            <button onClick={setHeroeActual(hero)} className="btn btn-primary">
              More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};