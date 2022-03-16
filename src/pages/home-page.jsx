import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/header";
import { HeroBanner } from "../components/hero-banner";

export const HomePage = () => {
  const props = {
    img: "test",
    text: "A Partnership With Staying Power",
    links: true,
  };

  return (
    <Box>
      <Header />
      <HeroBanner {...props} />
    </Box>
  );
};
