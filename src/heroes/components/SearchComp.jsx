import { useEffect, useState } from "react";
import { useHeroe } from "../hooks/useHeroe";
import { HeroesList } from "./HeroesList";
import { NotHeroe } from "../../ui/components/NotHeroe";

export const SearchComp = () => {
  const [hero, setHero] = useState("");
  const { heroes, getHeroes, getData, data } = useHeroe();
  const  [checkSearch, setCheckSearch] = useState(false)

  const handleInputChange = (e) => {
    setHero(e.target.value);
  };

  const handleShowHero = (e) => {
    e.preventDefault();
    if (hero.trim().length > 1) {
      getHeroes(hero);
      const state = checkLength()
      setCheckSearch(state)
    } else {
      // mostraremos modal de boo
    }
  };

  const checkLength = () => {
    if ( heroes.length === 0 ) {
      return true;
    } else {
      return false;
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
                  className="form-control shadow-sm animate__animated animate__bounce"
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
          {heroes.length > 0  ? <HeroesList heroes={heroes} /> : heroes.length === 0 && checkSearch ? <NotHeroe /> : null}
        </div>
      </div>
    </>
  );
};
