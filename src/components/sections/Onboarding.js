import Image from "next/image";
import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import data from "../../data/onboarding";
import Header from "../Header";

export default function Onboarding() {
  const Card = ({ title, description, image, alt }) => {
    return (
      <VStack
        align="center"
        spacing={0}
        overflow="hidden"
        border="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        w={{ base: "100%", md: "300px" }}
        p={{ base: 4, md: 6 }}
      >
        <Stack
          position="relative"
          align="center"
          justify="center"
          boxSize={{ base: "200px", lg: "300px" }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="300px"
            style={{
              objectFit: "contain",
            }}
          />
        </Stack>
        <VStack spacing={4}>
          <Heading
            as="h3"
            fontSize={26}
            fontWeight="extrabold"
            textAlign="center"
          >
            {title}
          </Heading>
          <Text color="gray.500" textAlign="center">
            {description}
          </Text>
        </VStack>
      </VStack>
    );
  };
  const Steps = () => {
    return (
      <Stack spacing={0} justify="center" gap={8} direction="row" wrap="wrap">
        {data.cards.map(({ ...onboarding }, index) => (
          <Card key={index} {...onboarding} />
        ))}
      </Stack>
    );
  };
  const OnboardingContainer = ({ children }) => {
    return (
      <Stack as="section" py={{ base: 8, md: 12 }}>
        {children}
      </Stack>
    );
  };

  return (
    <OnboardingContainer>
      <Header section={data.header.section} title={data.header.title} />
      <Steps />
    </OnboardingContainer>
  );
}
