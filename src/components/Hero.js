import {
  Box,
  Button,
  Heading,
  Highlight,
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
            fontSize={{ base: 20, lg: 60 }}
            lineHeight="4rem"
            fontFamily="Literata"
            fontWeight="normal"
            mb={2}
          >
            Consigue recursos gráficos a la medida de tus proyectos
          </Heading>
          <Text color="gray.500">
            Por que compartimos tu emoción por crear, nuestros servicios de
            diseño gráfico te acompañan paso a paso para transformar tu idea en
            una realidad única.
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
      <Stack
        w={{ md: "45%" }}
        borderRadius="3xl"
        justify="center"
        align="center"
      >
        <Image
          src="/images/hero.svg"
          boxSize={{ base: "250px", md: "450px" }}
          alt="hero image"
        />
      </Stack>
    );
  };
  const HeroContainer = ({ children }) => {
    return (
      <Stack minH={{ base: "fit-content", lg: "calc(100vh - 148px)" }}>
        <Stack
          justify={{ base: "center", md: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          align={{ base: "normal", md: "flex-end" }}
          spacing={{ base: 8 }}
          pt={{ base: 0, md: 12 }}
          pb={{ base: 8, md: 12 }}
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
