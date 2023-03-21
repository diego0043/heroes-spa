import { ButtonHome } from "./ButtonHome";
import { HomeAnimation } from "./HomeAnimation";

export const HomeComp = () => {
  return (
    <>
      <div className="container home-left-style">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-5 text-center">
            <h1 className="mt-5 fw-bold ">Welcome to the Heroes App</h1>
            <hr />
            <p className="mt-5">
              This is a simple app to search for your favorite heroes
            </p>
            <p>It uses the Marvel and DC Comics API</p>
            <ButtonHome/>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 text-center aling-middle">
            <HomeAnimation />
          </div>
        </div>
      </div>
    </>
  );
};
