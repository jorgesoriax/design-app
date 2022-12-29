import {
  Box,
  Button,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { List, Moon, Sun, X } from "phosphor-react";
import React from "react";
import LYButton from "./LYButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode, toggleColorMode } = useColorMode();
  const links = [
    { title: "Inspiración", href: "#" },
    { title: "Blog", href: "#" },
  ];

  const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {!isOpen ? (
          <IconButton
            variant="ghost"
            icon={<List size={26} weight="fill" />}
            aria-label="Open menu"
          />
        ) : (
          <IconButton
            variant="ghost"
            icon={<X size={26} weight="fill" />}
            aria-label="Close menu"
          />
        )}
      </Box>
    );
  };
  const Links = () => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
        >
          <Stack spacing={4} direction={["column", "column", "row", "row"]}>
            {links.map(({ href, title }, index) => (
              <NextLink key={index} href={href} legacyBehavior passHref>
                <LYButton
                  as="a"
                  variant="outline"
                  w={{ base: "full", md: "auto" }}
                >
                  {title}
                </LYButton>
              </NextLink>
            ))}
            <LYButton colorScheme="brand">Hora de crear</LYButton>
            {/* Darkmode button */}
            {/* <IconButton
              onClick={toggleColorMode}
              icon={
                colorMode == "light" ? (
                  <Sun size={26} weight="fill" />
                ) : (
                  <Moon size={26} weight="fill" />
                )
              }
              aria-label="Toggle darkmode"
            /> */}
          </Stack>
        </Stack>
      </Box>
    );
  };
  const Logo = () => {
    return (
      <Box>
        <NextLink href="/">
          <Image boxSize="50px" src="/favicon.svg" alt="Logo de lyne" />
        </NextLink>
      </Box>
    );
  };
  const NavbarContainer = ({ children }) => {
    return (
      <HStack
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        py={{ base: 8, md: 12 }}
      >
        {children}
      </HStack>
    );
  };

  return (
    <NavbarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Links isOpen={isOpen} />
    </NavbarContainer>
  );
}
