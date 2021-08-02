import React from "react";
import "./avatar.css";

const Avatar = ({ avatar }) => {
  const { name, gender, type, status, image, location } = avatar;

  return (
    <section>
      <img src={image} alt="avatar" className="image" />
      <h4>{`${name} ${gender} ${type} ${status} ${location.name}`}</h4>
    </section>
  );
};

export default Avatar;
