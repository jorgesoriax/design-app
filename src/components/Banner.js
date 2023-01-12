import Image from "next/image";
import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import LYButton from "./LYButton";

export default function ReadyTo({ data }) {
  const Banner = () => {
    return (
      <Stack
        justify="center"
        align="center"
        spacing={8}
        p={{ base: 8, md: 12 }}
        borderRadius="2xl"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        <Image
          src={data.image}
          alt={data.alt}
          fill
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <VStack spacing={4}>
          <Heading as="h2" color="white" fontWeight="extrabold">
            {data.title}
          </Heading>
          <Text color="white">{data.description}</Text>
        </VStack>
        <LYButton w="fit-content" color="brand.500">
          {data.ctaButton}
        </LYButton>
      </Stack>
    );
  };
  const ReadyToContainer = ({ children }) => {
    return <Stack as="section">{children}</Stack>;
  };

  return (
    <ReadyToContainer>
      <Banner />
    </ReadyToContainer>
  );
}
