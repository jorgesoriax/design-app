import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import data from "../data/footer";

export default function Footer() {
  const Utility = () => {
    return (
      <GridItem colSpan={{ lg: 2 }}>
        <Flex justify={{ base: "center", lg: "left" }}>
          <Stack
            align="start"
            justify={{ base: "center", lg: "left" }}
            direction={{ base: "column", lg: "row" }}
            gap={8}
            spacing={0}
            w={{ base: "fit-content", lg: "auto" }}
          >
            {data.utility.map(({ header, items }, index) => (
              <Box key={index}>
                <Heading as="h4" fontSize={18} fontWeight="extrabold">
                  {header}
                </Heading>
                <List>
                  {items.map(({ title, href }, index) => (
                    <ListItem key={index}>
                      <NextLink href={href} legacyBehavior passHref>
                        <Link>{title}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Stack>
        </Flex>
      </GridItem>
    );
  };
  const Secondary = () => {
    return (
      <GridItem alignSelf="end">
        <Box color="gray.500" whiteSpace="nowrap">
          <List>
            <HStack
              justify={{ base: "center", md: "center", lg: "left" }}
              rowGap={0}
              columnGap={8}
              spacing={0}
              wrap="wrap"
            >
              {data.secondary.map(({ title, href }, index) => (
                <ListItem key={index}>
                  <NextLink href={href} legacyBehavior passHref>
                    <Link>{title}</Link>
                  </NextLink>
                </ListItem>
              ))}
            </HStack>
          </List>
        </Box>
      </GridItem>
    );
  };
  const SocialMedia = () => {
    return (
      <GridItem>
        <Box>
          <List>
            <HStack
              spacing={4}
              justify={{ base: "center", md: "center", lg: "end" }}
            >
              {data.socialMedia.map(({ title, href, phIcon }, index) => (
                <ListItem key={index}>
                  <NextLink href={href} legacyBehavior passHref>
                    <IconButton
                      as="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={title}
                      icon={phIcon}
                    />
                  </NextLink>
                </ListItem>
              ))}
            </HStack>
          </List>
        </Box>
      </GridItem>
    );
  };
  const FooterContainer = ({ children }) => {
    return (
      <Box as="footer">
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="2xl"
          py={{ base: 8, md: 12 }}
          px={{ base: 2, md: 8 }}
        >
          <Grid
            gap={8}
            templateColumns={{
              base: "auto",
              md: "auto",
              lg: "repeat(2, auto)",
            }}
            templateRows={{
              base: "repeat(3, auto)",
              md: "repeat(3, auto)",
              lg: "repeat(2, auto)",
            }}
          >
            {children}
          </Grid>
        </Box>
      </Box>
    );
  };

  return (
    <FooterContainer>
      <Utility />
      <Secondary />
      <SocialMedia />
    </FooterContainer>
  );
}
