import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import footer from "../content/footer";

export default function Footer() {
  const Utility = () => {
    return (
      <GridItem colSpan={2}>
        <HStack spacing={8} align="start" w="full">
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
        </HStack>
      </GridItem>
    );
  };
  const Secondary = () => {
    return (
      <GridItem alignSelf="end">
        <Box color="gray.500" whiteSpace="nowrap">
          <List>
            <HStack spacing={8}>
              {footer.secondary.map(({ title, href }, index) => (
                <ListItem>
                  <NextLink key={index} href={href} legacyBehavior passHref>
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
            <HStack spacing={4} justify="end">
              {footer.socialMedia.map(({ title, href, phIcon }, index) => (
                <ListItem>
                  <NextLink key={index} href={href} legacyBehavior passHref>
                    <IconButton as="a" target="_blank" rel="noopener noreferrer" icon={phIcon} />
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
      <Box
        as="footer"
        borderRadius="2xl"
        border="1px"
        borderColor="gray.200"
        p={8}
        my={12}
      >
        <Grid
          w="full"
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2)"
          gap={8}
        >
          {children}
        </Grid>
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
