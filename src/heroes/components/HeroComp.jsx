import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeroDetail } from "./HeroDetail";

export const HeroComp = () => {
  const { heroeId } = useParams();
  const id = heroeId.split("-").pop();
  return (
    <>
      <HeroDetail id={id} />
    </>
  );
};
