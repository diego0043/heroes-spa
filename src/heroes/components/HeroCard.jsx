import { Link } from "react-router-dom";
import { useHeroe } from "../hooks/useHeroe";

export const HeroCard = ({ name, fullName, url, company, heroe }) => {
  let urlHeroe = "";
  try {
    urlHeroe = "/hero/" + name + "-" + heroe.id;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div className="card card-size mb-2 mx-2 shadow col-3 animate__animated animate__fadeIn">
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
          <Link to={urlHeroe}>
            <button className="btn btn-primary">More</button>
          </Link>
        </div>
      </div>
    </>
  );
};
