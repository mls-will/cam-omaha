import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/header";

export const HomePage = () => {
  return (
    <Box>
      <Header />
      <h1>Home Page</h1>
      <p>
        <Link to="/about">About</Link> section boi.
      </p>
    </Box>
  );
};
