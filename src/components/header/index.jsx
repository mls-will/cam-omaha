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
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";

/*
 const [isMobile] = useMediaQuery("(max-width: 768px)") 
 return (
   <Text>
    {isMobile ? "This is a mobile device" : "This is a desktop device"}
   </Text>
  )
*/

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex margin={3}>
      <Grid templateColumns="repeat(3, 1fr)" spacing="50px">
        <GridItem>
          <Link to="/">
            <img src="./cam-logo.jpeg" alt="Logo" height="200px" />
          </Link>
        </GridItem>
        <Box>
          {!isSmallScreen ? (
            <GridItem m={3}>
              <IconButton
                colorScheme="facebook"
                icon={<FaFacebook />}
                borderRadius="50%"
                aria-label="Facebook"
                size="lg"
                mr={3}
              ></IconButton>
              <IconButton
                colorScheme="twitter"
                icon={<FaTwitter />}
                borderRadius="50%"
                aria-label="Twitter"
                size="lg"
              ></IconButton>
            </GridItem>
          ) : null}
        </Box>
        <GridItem colStart={10} colEnd={12}>
          {isSmallScreen ? <MobileNav /> : <DesktopNav />}
        </GridItem>
      </Grid>
    </Flex>
  );
};
