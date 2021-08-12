import React from "react";
import "./avatar.css";

const Avatar = ({ avatar }) => {
  const { name, gender, type, status, image, location } = avatar;
  return (
    <article className="cardWrapper">
      <img src={image} alt="avatar" />
      <div className="cardContent-Wrapper">
        <section>
          <a
            href="https://rickandmortyapi.com/api/character"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <h2>{name}</h2>
          </a>
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
  );
};

export default Avatar;
