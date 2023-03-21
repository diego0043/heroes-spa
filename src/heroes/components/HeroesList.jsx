import { HeroCard } from "./HeroCard";

export const HeroesList = ({ heroes }) => {
  return (
    <>
      <div className="card-columns row mt-5 mb-5">
        {heroes.map((heroe) => {
          return (
            <HeroCard
              key={heroe.id}
              name={heroe.name}
              fullName={heroe.biography.fullName}
              url={heroe.images.sm}
              company={heroe.biography.publisher}
              hero={heroe}
            />
          );
        })}
      </div>
    </>
  );
};
