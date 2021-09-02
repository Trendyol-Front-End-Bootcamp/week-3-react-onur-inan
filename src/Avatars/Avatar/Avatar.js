import React from "react";
import "./avatar.css";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";

const Avatar = ({ avatar }) => {
  const { name, gender, type, status, image, location, id } = avatar;
  return (
    <Link to={`/character/${id}`}>
      <article className="cardWrapper">
        <img src={image} alt="avatar" />
        <div className="cardContent-Wrapper">
          <section className="grayText">
            <h2>{name}</h2>

            <span className="status">{`${type} -- ${status}`}</span>
          </section>
          <section>
            <span className="grayText">Last Known Location:</span>
            <h4>{location.name}</h4>
          </section>
          <section>
            <span className="grayText">Gender:</span>
            <h4>{gender}</h4>
          </section>
        </div>
      </article>
    </Link>
  );
};

export default Avatar;
