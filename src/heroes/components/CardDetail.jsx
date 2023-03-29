import React from "react";

export const CardDetail = ({ detail }) => {
  return (
    <div>
      <div className="container">
        <div className="card p-1 mt-3 shadow">
          <div className="row">
            <span className=" text-center"> Appearance</span>
          </div>
          <div className="row mt-2">
            <div className="col ms-4">Eye color: {detail.appearance.eyeColor}</div>
          </div>
          <div className="row">
            <div className="col ms-4">Gender: {detail.appearance.gender}</div>
          </div>
          <div className="row mb-2">
            <div className="col ms-4">Race: {detail.appearance.race}</div>
          </div>
        </div>
        <div className="card p-1 mt-3 shadow">
          <div className="row">
            <span className=" text-center"> Biography</span>
          </div>
          <div className="row mt-2">
            <div className="col ms-4">Alter egos: {detail.biography.alterEgos}</div>
          </div>
          <div className="row">
            <div className="col ms-4">First appearance: {detail.biography.firstAppearance}</div>
          </div>
          <div className="row">
            <div className="col ms-4">Full name: {detail.biography.fullName}</div>
          </div>
          <div className="row">
            <div className="col ms-4 mb-2">Publisher: {detail.biography.publisher}</div>
          </div>
        </div>
        <div className="card p-1 mt-3 shadow mb-4">
          <div className="row">
            <span className=" text-center">Power stats</span>
          </div>
          <div className="row mt-2">
            <div className="col ms-4">Combat: {detail.powerstats.combat}</div>
          </div>
          <div className="row">
            <div className="col ms-4">Durability: {detail.powerstats.durability}</div>
          </div>
          <div className="row">
            <div className="col ms-4">Intelligence: {detail.powerstats.intelligence}</div>
          </div>
          <div className="row">
            <div className="col ms-4">Power: {detail.powerstats.power}</div>
          </div>
          <div className="row">
            <div className="col ms-4">Speed: {detail.powerstats.speed}</div>
          </div>
          <div className="row">
            <div className="col ms-4 mb-2">Strength: {detail.powerstats.strength}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
