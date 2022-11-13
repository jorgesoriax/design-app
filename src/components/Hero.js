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
import NextImage from "next/image";

export default function Hero() {
  return (
    <Stack
      justify={{ base: "center", md: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      align={{ base: "normal", md: "flex-end" }}
      spacing={{ base: 8 }}
    >
      <Box w={{ base: "", md: "50%" }} h="fit-content">
        <VStack align="left" spacing={2} mb={{base: 8, md: 12}}>
          <Text color="gray.500">/ Diseño Gráfico</Text>
          <Heading fontWeight="semibold">
            <Highlight
              query={["Lorem ipsum", "amet consectetur"]}
              styles={{
                fontSize: "46",
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
      <Stack
        w={{ base: "", md: "45%" }}
        border="1px"
        borderColor="gray.200"
        borderRadius="3xl"
        objectFit="cover"
        justify="center"
        align="center"
      >
        <Image
          src="/images/hero.png"
          boxSize={{ base: "350px", md: "450px" }}
          alt="hero image"
        />
      </Stack>
    </Stack>
  );
}
