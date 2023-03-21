import { useEffect, useState } from "react";
import { useHeroe } from "../hooks/useHeroe";
import { HeroesList } from "./HeroesList";

export const SearchComp = () => {
  const [hero, setHero] = useState("");
  const { heroes, getHeroes, getData, data } = useHeroe();

  const handleInputChange = (e) => {
    setHero(e.target.value);
  };

  const handleShowHero = (e) => {
    e.preventDefault();
    if (hero.trim().length > 1) {
      getHeroes(hero);
    } else {
      alert("Please enter a valid name");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="contaiener p-5">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <div>
              <form onSubmit={handleShowHero}>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  aria-describedby="emailHelp"
                  placeholder="Search Hero"
                  autoComplete="off"
                  value={hero}
                  onChange={handleInputChange}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          {heroes.length > 0 ? <HeroesList heroes={heroes} /> : null}
        </div>
      </div>
    </>
  );
};
