import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex margin={3}>
      <Grid templateColumns="repeat(3, 1fr)" spacing="50px">
        {isSmallScreen ? <MobileNav /> : <DesktopNav />}
      </Grid>
    </Flex>
  );
};
