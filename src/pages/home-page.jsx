import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        <Link to="/about">About</Link> section boi.
      </p>
    </div>
  );
};
