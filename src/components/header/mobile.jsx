import React from "react";
import {
  Box,
  GridItem,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MobileNav = () => {
  return (
    <>
      <GridItem>
        <Link to="/">
          <img src="./cam-logo.jpeg" alt="Logo" height="200px" />
        </Link>
      </GridItem>
      <GridItem colStart={10} colEnd={12}>
        <Menu closeOnSelect={true}>
          <MenuButton
            as={IconButton}
            aria-label="Menu"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <Portal>
            <MenuList>
              <MenuItem as={RouteLink} to="/">
                Home
              </MenuItem>
              <MenuItem as={RouteLink} to="/about">
                About
              </MenuItem>
              <MenuItem as={RouteLink} to="/services">
                Services
              </MenuItem>
              <MenuItem as={RouteLink} to="/client-links">
                Client Links
              </MenuItem>
              <MenuItem as={RouteLink} to="/commitments">
                Commitments
              </MenuItem>
              <MenuItem as={RouteLink} to="/testimonials">
                Testimonials
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </GridItem>
    </>
  );
};
