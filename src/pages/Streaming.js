import React from "react";
import Youtube from "../component/Youtube";
import "./Streaming.scss";
import { useParams } from "react-router";
import dataFilm from "../api/dataFilm";

const Streaming = () => {
  let { slug } = useParams();

  return (
    <div className="streaming">
      <div className="container">
        <h1 className="header">DAY - {slug} BRAWIJAYA FILM FESTIVAL</h1>
        <Youtube />
        {dataFilm.filter(filterfilm => filterfilm.day === slug).map((film) => {
          return (
            <div className="row mb-5">
              <div className="col-3" style={{ padding: "0" }}>
                <img src={`/img/programs/${film.poster}`} alt="" width="250" />
              </div>
              <div className="col-9">
                <h1>{film.judul}</h1>
                <p>{film.direktor}</p>
                <p>{film.sinopsis}</p>
              </div>
            </div>
          );
        })} 
      </div>
    </div>
  );
};

export default Streaming;
