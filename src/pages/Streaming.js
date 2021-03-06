import React from "react";
import YoutubeEmbed from "../component/Youtube";
import "./Streaming.scss";
import { useParams } from "react-router";
import dataFilm from "../api/dataFilm";
import { Helmet } from "react-helmet";

const Streaming = () => {
  let { slug } = useParams();

  return (
    <div className="streaming">
      <Helmet>
          <title>Streaming Day - {slug}</title>
      </Helmet>

      <div className="container">
        <h1 className="header">BYFEST DAY - {slug}</h1>
        <YoutubeEmbed embedId="rKIBiJt6EF8" />
        <div className="judul">
          <h2>NOW PLAYING</h2>
        </div>
        {dataFilm
          .filter((filterfilm) => filterfilm.day === slug)
          .map((film) => {
            return (
              <div className="row my-4">
                <div
                  className="col-lg-3 d-flex justify-content-center"
                  style={{ padding: "0" }}
                >
                  <img
                    src={`/img/programs/${film.poster}`}
                    alt=""
                  />
                </div>
                <div className="col-lg-9 ">
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
