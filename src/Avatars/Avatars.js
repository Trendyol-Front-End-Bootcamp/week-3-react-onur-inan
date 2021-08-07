import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "./Avatar/Avatar";
import "./avatars.css";

const Avatars = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    axios
      .get(process.env.REACT_APP_API_KEY) // fetch only 20 characters not all of them.
      .then((res) => {
        console.log(res);
        setAvatars(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="wrapper">
      {avatars.map((avatar) => (
        <Avatar key={avatar.id} avatar={avatar} />
      ))}
    </main>
  );
};

export default Avatars;
