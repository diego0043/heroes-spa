import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const NotHeroe = () => {
  return (
    <>
    <Player
      autoplay
      loop
      src="https://assets8.lottiefiles.com/private_files/lf30_zncbuxbi.json"
      style={{ height: "500px", width: "500px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
    <h2 className="text-center text-not-found">
        <span className="text-uppercase">Page not found</span>
    </h2>
    </>
  );
};
