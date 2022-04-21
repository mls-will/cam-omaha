import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Header } from "../components/header";
import { HeroBanner } from "../components/hero-banner";
import { TextBlock } from "../components/text-block";
import { textAssets } from "../textAssets";

export const AboutPage = () => {
  const props = {
    img: "test",
    text: textAssets.aboutPage.header1,
    links: false,
  };

  const { aboutPage } = textAssets;

  return (
    <Box>
      <Header />
      <HeroBanner {...props} />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={3}>
          <TextBlock text={aboutPage.paragraph1} />
          <TextBlock text={aboutPage.paragraph2} />
          <TextBlock text={aboutPage.paragraph3} />
        </GridItem>
        <GridItem w="100%" colSpan={2} mt={20}>
          image here
        </GridItem>
      </Grid>
    </Box>
  );
};
