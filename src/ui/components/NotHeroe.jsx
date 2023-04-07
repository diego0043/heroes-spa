import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const NotHeroe = () => {
  return (
    <>
    <Player
      autoplay
      loop
      src="https://assets8.lottiefiles.com/private_files/lf30_zncbuxbi.json"
      style={{ height: "400px", width: "400px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
    <h2 className="text-center text-not-found">
        <span className="text-uppercase">Hero not found</span>
    </h2>
    </>
  );
};
