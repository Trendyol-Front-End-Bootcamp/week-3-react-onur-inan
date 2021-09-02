import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";
import axios from "axios";

const CharacterDetail = () => {
  const [episodes, setEpisodes] = useState([]);
  const [characterDetails, setCharacterDetails] = useState([]);
  const { id } = useParams();

  const { name, gender, type, status, image, location } = characterDetails;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/${id}`)
      .then((res) => {
        setCharacterDetails(res.data);
        setEpisodes(res.data.episodes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <article className="cardWrapper">
      <img src={image} alt="avatar" />
      <div className="cardContent-Wrapper">
        <section className="grayText">
          <h2>{name}</h2>

          <span className="status">{`${type} -- ${status}`}</span>
        </section>
        <section>
          <span className="grayText">Last Known Location:</span>
          <h4>{{ ...location }.name}</h4>
        </section>
        <section>
          <span className="grayText">Gender:</span>
          <h4>{gender}</h4>
        </section>
      </div>
    </article>
  );
};

export default CharacterDetail;
