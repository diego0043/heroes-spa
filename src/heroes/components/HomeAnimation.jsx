import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const HomeAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets4.lottiefiles.com/private_files/lf30_jo7huq2d.json"
      style={{ height: "400px", width: "400px" }}
    >
      <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  );
};
