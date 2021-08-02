import React from "react";

const Avatar = ({ avatar }) => {
  const { name, gender, type, status, image, location } = avatar;

  return (
    <div>
      <img src={image} alt="avatar" />
      <h4>{`${name} ${gender} ${type} ${status} ${location.name}`}</h4>
    </div>
  );
};

export default Avatar;
