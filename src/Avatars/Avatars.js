import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "./Avatar/Avatar";

const Avatars = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/") // fetch only 20 characters not all of them.
      .then((res) => {
        console.log(res);
        setAvatars(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {avatars.map((avatar) => (
          <Avatar key={avatar.id} avatar={avatar} />
        ))}
      </ul>
    </div>
  );
};

export default Avatars;
