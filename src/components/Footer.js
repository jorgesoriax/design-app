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
import footer from "../content/footer";

export default function Footer() {
  const Utility = () => {
    return (
      <GridItem colSpan={{ lg: 2 }}>
        <Flex justify={{ base: "center", lg: "left" }}>
          <Stack
            w={{ base: "fit-content", lg: "auto" }}
            spacing={0}
            gap={8}
            align="start"
            justify={{ base: "center", lg: "left" }}
            direction={{ base: "column", lg: "row" }}
          >
            {footer.utility.map(({ header, items }, index) => (
              <Box key={index}>
                <Heading as="h3" fontWeight="medium" fontSize={18}>
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
              spacing={0}
              rowGap={0}
              columnGap={8}
              wrap="wrap"
              justify={{ base: "center", md: "center", lg: "left" }}
            >
              {footer.secondary.map(({ title, href }, index) => (
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
              {footer.socialMedia.map(({ title, href, phIcon }, index) => (
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
      <Box as="footer" py={{ base: 8, md: 12 }}>
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="2xl"
          py={{ base: 8, md: 12 }}
          px={{ base: 2, md: 8 }}
        >
          <Grid
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
            gap={8}
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
