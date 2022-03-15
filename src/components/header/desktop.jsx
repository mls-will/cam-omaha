import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const DesktopNav = () => {
  const [currentPage, setCurrentPage] = useState("black");

  useEffect(() => {});

  const handleOnClick = () => {};
  return (
    <Box>
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
    </Box>
  );
};
