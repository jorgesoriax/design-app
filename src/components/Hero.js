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
import { Confetti } from "phosphor-react";
import LYButton from "./LYButton";

export default function Hero() {
  const Content = () => {
    return (
      <Box w="100%">
        <VStack
          // align="left"
          align="center"
          spacing={2}
          mb={{ base: 8, md: 12 }}
          h="fit-content"
        >
          <Heading
            as="h1"
            fontSize={{ base: 20, lg: 54 }}
            fontWeight="extrabold"
            mb={2}
            textAlign="center"
          >
            Save on designing for your next startup idea
          </Heading>
          <Text w="75%" color="gray.600" textAlign="center">
            Nuestros servicios de diseño gráfico te acompañan paso a paso para
            transformar tu idea en una realidad única.
          </Text>
        </VStack>
        <Stack spacing={4} justify="center" direction={{ base: "column", md: "row" }}>
          <LYButton
            colorScheme="brand"
            leftIcon={<Confetti size={26} weight="fill" />}
            fontWeight="medium"
          >
            ¡Comencemos a crear!
          </LYButton>
          <LYButton variant="outline" colorScheme="brand">
            ¿Cómo funciona?
          </LYButton>
        </Stack>
      </Box>
    );
  };
  // const Illustration = () => {
  //   return (
  //     <Stack justify="center" align="center">
  //       <Image
          // src="/static/images/hero.svg"
  //         boxSize={{ base: "250px", md: "calc(calc(100vh - 146px) - 4rem)" }}
          // alt="hero image"
  //       />
  //     </Stack>
  //   );
  // };
  const HeroContainer = ({ children }) => {
    return (
      <Stack
        minH={{ base: "fit-content", lg: "calc(100vh - 146px)" }}
        pb={{ base: 8, md: 12 }}
        justify="center"
        align="center"
      >
        <Stack
          // justify={{ base: "center", md: "space-between" }}
          // direction={{ base: "column-reverse", md: "row" }}
          // align={{ base: "normal", md: "flex-end" }}
          justify="center"
          align="center"
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
      {/* <Illustration /> */}
    </HeroContainer>
  );
}
