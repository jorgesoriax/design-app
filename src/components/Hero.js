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
          <Text color="gray.500">/ Diseño Gráfico</Text>
          <Heading fontWeight="semibold" fontSize={{ base: 20, lg: 36 }}>
            <Highlight
              query={["Lorem ipsum", "amet consectetur"]}
              styles={{
                fontSize: { base: 36, lg: 46 },
              }}
            >
              Lorem ipsum dolor a sit amet consectetur
            </Highlight>
          </Heading>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet consectetur. Sed phasellus netus viverra
            at felis tellus enim molestie. Ac id iaculis consequat odio
            curabitur...
          </Text>
        </VStack>
        <HStack spacing={4}>
          <Button colorScheme="brand">Hora de crear</Button>
          <Button variant="outline" colorScheme="brand">
            ¿Cómo funciona ?
          </Button>
        </HStack>
      </Box>
    );
  };
  const Illustration = () => {
    return (
      <Stack
        w={{ md: "45%" }}
        // border="1px"
        // borderColor="gray.200"
        borderRadius="3xl"
        justify="center"
        align="center"
      >
        <Image
          src="/images/hero.svg"
          boxSize={{ base: "250px", md: "450px" }}
          // fit="cover"
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
