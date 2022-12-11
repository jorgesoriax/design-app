import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Hero() {
  const Content = () => {
    return (
      <Box w={{ md: "50%" }}>
        <VStack
          align="left"
          spacing={2}
          mb={{ base: 8, md: 12 }}
          h="fit-content"
        >
          <Heading
            as="h1"
            fontSize={{ base: 20, lg: 54 }}
            fontWeight="semibold"
            mb={2}
          >
            Consigue recursos gráficos a la medida
          </Heading>
          <Text color="gray.500">
            Nuestros servicios de diseño gráfico te acompañan paso a paso para
            transformar tu idea en una realidad única.
          </Text>
        </VStack>
        <HStack spacing={4}>
          <Button colorScheme="brand">¡Comencemos a crear!</Button>
          <Button variant="outline" colorScheme="brand">
            ¿Cómo funciona?
          </Button>
        </HStack>
      </Box>
    );
  };
  const Illustration = () => {
    return (
      <Stack justify="center" align="center">
        <Image
          src="/static/images/hero.svg"
          boxSize={{ base: "250px", md: "calc(calc(100vh - 146px) - 4rem)" }}
          alt="hero image"
        />
      </Stack>
    );
  };
  const HeroContainer = ({ children }) => {
    return (
      <Stack
        minH={{ base: "fit-content", lg: "calc(100vh - 146px)" }}
        pb={{ base: 8, md: 12 }}
      >
        <Stack
          justify={{ base: "center", md: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          align={{ base: "normal", md: "flex-end" }}
          spacing={{ base: 8 }}
        >
          {children}
        </Stack>
      </Stack>
    );
  };

  return (
    <HeroContainer>
      <Content />
      <Illustration />
    </HeroContainer>
  );
}
