import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { textAssets } from "../../textAssets";
import { styles } from "./styles";

export const TestimonialsWidget = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [animate, setAnimate] = useState("");

  /* create a function that loops through the
    textAssets.testimonialsPage.entries array to set
    the quote. use the setCurrentQuote function
    */

  setTimeout(() => {
    // call function here
  }, 2000);

  //

  return (
    <Flex margin={20} className={animate}>
      <p>{currentQuote}</p>
    </Flex>
  );
};
