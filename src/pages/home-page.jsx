import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/header";
import { HeroBanner } from "../components/hero-banner";
import { TextBlock } from "../components/text-block";
import { TestimonialsWidget } from "../components/testimonials";

import { textAssets } from "../textAssets";

export const HomePage = () => {
  const pageProps = {
    mainBanner: {
      img: "test",
      text: textAssets.homePage.header1,
      links: true,
    },
    secondBanner: {
      img: "test",
      text: textAssets.homePage.header2,
      links: false,
    },
  };

  return (
    <Box>
      <Header />
      <HeroBanner {...pageProps.mainBanner} />
      <TextBlock text={textAssets.homePage.paragraph1} />
      <HeroBanner {...pageProps.secondBanner} />
      <TestimonialsWidget />
    </Box>
  );
};
