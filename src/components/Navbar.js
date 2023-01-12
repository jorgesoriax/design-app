import React from "react";
import NextLink from "next/link";
import {
  Box,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { List, Moon, Sun, X } from "phosphor-react";
import data from "../data/navbar.json";
import LYLinkButton from "./LYLinkButton";
import LYButton from "./LYButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode, toggleColorMode } = useColorMode();

  const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {!isOpen ? (
          <IconButton
            variant="ghost"
            icon={<List size={32} weight="fill" />}
            aria-label="Open menu"
          />
        ) : (
          <IconButton
            variant="ghost"
            icon={<X size={32} weight="fill" />}
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
            {data.links.map(({ href, title }, index) => (
              <Box key={index}>
                <LYLinkButton
                  w={{ base: "full", md: "auto" }}
                  href={href}
                  variant="outline"
                >
                  {title}
                </LYLinkButton>
              </Box>
            ))}
            <LYLinkButton href={data.ctaButton.href} colorScheme="brand">
              {data.ctaButton.title}
            </LYLinkButton>
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
          <Image boxSize="50px" src="/favicon.svg" alt="Símbolo de Lyne" />
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
        py={12}
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
