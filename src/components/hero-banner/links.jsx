import React from "react";
import { Box, Button, ButtonGroup, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LinksComponent = () => {
  return (
    <Box>
      <Center>
        <ButtonGroup spacing="3" mb={5}>
          <Button as={Link} to="/commitments" width="100%" height="50px">
            Commitments
          </Button>
          <Button as={Link} to="/testimonials" width="100%" height="50px">
            Testimonials
          </Button>
        </ButtonGroup>
      </Center>
    </Box>
  );
};
