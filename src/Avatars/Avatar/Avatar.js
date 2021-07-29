import React from "react";

const Avatar = ({ avatar }) => {
  const { name, gender, type, status, image, location } = avatar;

  return (
    <div>
      <img src={image} alt="avatar" />
      <h1>{`${name} ${gender} ${type} ${status} ${location.name}`}</h1>
    </div>
  );
};

export default Avatar;
