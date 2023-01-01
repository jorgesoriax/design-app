import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Confetti } from "phosphor-react";
import data from "../../data/hero.json";
import { LYButton } from "../Lyne";

export default function Hero() {
  const Content = () => {
    return (
      <Box w="100%">
        <VStack
          align="center"
          spacing={2}
          mb={{ base: 8, md: 12 }}
          h="fit-content"
        >
          <Heading
            as="h1"
            mb={2}
            fontSize={{ base: 20, lg: 54 }}
            fontWeight="extrabold"
            textAlign="center"
          >
            {data.title}
          </Heading>
          <Text w="75%" color="gray.600" textAlign="center">
            {data.description}
          </Text>
        </VStack>
        <Stack justify="center" direction={{ base: "column", md: "row" }}>
          <LYButton
            colorScheme="brand"
            leftIcon={<Confetti size={26} weight="fill" />}
            fontWeight="medium"
          >
            {data.ctaButton}
          </LYButton>
          <LYButton variant="outline" colorScheme="brand">
            {data.secondaryButton}
          </LYButton>
        </Stack>
      </Box>
    );
  };
  const HeroContainer = ({ children }) => {
    return (
      <Stack
        as="section"
        align="center"
        justify="center"
        minH={{ base: "fit-content", lg: "calc(100vh - 146px)" }}
        pb={{ base: 8, md: 12 }}
      >
        <Stack align="center" justify="center" spacing={{ base: 8 }}>
          {children}
        </Stack>
      </Stack>
    );
  };

  return (
    <HeroContainer>
      <Content />
    </HeroContainer>
  );
}
