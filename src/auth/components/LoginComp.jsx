import { AnimationLogin } from "./AnimationLogin";
import { FormLogin } from "./FormLogin";
import { LoginWithOthers } from "./LoginWithOthers";

export const LoginComp = () => {
  return (
    <>
      <div className="container login-container mx-auto shadow">
        <div className="row d-flex justify-conten-center">
          <div className="col-6">
            <AnimationLogin />
          </div>
          <div className="col-6 p-4">
            <div className="row mb-2 mt-3">
              <span className="text-center h2">Log in</span>
            </div>
            <div className="row mb-4">
              <FormLogin />
            </div>
            <div className="row">
              <div className="col-5 ms-3">
                <hr />
              </div>
              <div className="col-1">
                <span className="text-center">or</span>
              </div>
              <div className="col-5">
                <hr />
              </div>
            </div>
            <div className="row">
                <LoginWithOthers/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
