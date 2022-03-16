import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { LinksComponent } from "./links";

/*
    example props: {
        img: 'img1.jpeg',
        text: 'Welcome to CAM',
        links: true
    }
*/

export const HeroBanner = (props) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const { img, text, links } = props;

  return (
    <Box backgroundColor="blue.600">
      <Center height="300px" color="white" ml={2} mr={2}>
        <Heading>{text}</Heading>
      </Center>
      {links && !isSmallScreen ? <LinksComponent /> : null}
    </Box>
  );
};
