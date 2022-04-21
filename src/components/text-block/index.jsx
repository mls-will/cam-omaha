import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const TextBlock = ({ text }) => {
  return (
    <Box margin={20}>
      <Text fontSize="lg">{text}</Text>
    </Box>
  );
};
