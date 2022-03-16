import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DesktopNav = () => {
  const [currentPage, setCurrentPage] = useState("black");

  useEffect(() => {});

  const handleOnClick = () => {};
  return (
    <>
      <GridItem colStart="1" colSpan={1} ml={10}>
        <Link to="/">
          <img src="./cam-logo.jpeg" alt="Logo" height="200px" />
        </Link>
      </GridItem>
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
      <GridItem colStart={12} colEnd={12} alignItems="flex-end">
        <Breadcrumb separator=" ">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/about"
              color={currentPage}
              onClick={() => handleOnClick()}
            >
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/services">
              Services
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/client-links">
              Client Links
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </GridItem>
    </>
  );
};
