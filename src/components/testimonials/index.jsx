import React, { useState, useEffect } from "react";
import { Flex, useAccordionItemState } from "@chakra-ui/react";
import { textAssets } from "../../textAssets";
import { styles } from "./styles";

export const TestimonialsWidget = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [animate, setAnimate] = useState("");

  const quotes = textAssets.testimonialsPage.entries;

  const quoteChange = (quoteArray) => {
    let index = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    setCurrentQuote(index);
  };

  quoteChange(quotes);
  setInterval(quoteChange(quotes), 10000);

  return (
    <Flex margin={20}>
      <p>"{currentQuote.quote}"</p>
      <br></br>
      <p>
        <cite>{currentQuote.person}</cite>
      </p>
    </Flex>
  );
};
