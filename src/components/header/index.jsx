import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";

export const Header = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex margin={3}>
      <Grid templateColumns="repeat(3, 1fr)" spacing="50px">
        {isSmallScreen ? <MobileNav /> : <DesktopNav />}
      </Grid>
    </Flex>
  );
};
