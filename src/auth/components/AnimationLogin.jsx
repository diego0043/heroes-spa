import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const AnimationLogin = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets10.lottiefiles.com/packages/lf20_bu1y6oml.json"
      style={{ height: "400px", width: "400px" }}
      className="mt-5"
    >
      <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  )
}
