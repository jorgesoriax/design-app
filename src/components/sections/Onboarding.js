import Image from "next/image";
import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Header from "../Header";

export default function Onboarding({ data }) {
  const Card = ({ title, description, image, alt }) => {
    return (
      <VStack
        align="center"
        spacing={0}
        overflow="hidden"
        border="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        w={{ base: "100%", md: "30%" }}
        minW="250px"
        p={{ base: 4, md: 6 }}
      >
        <Stack
          position="relative"
          align="center"
          justify="center"
          boxSize={{ base: "150px", md: "250px" }}
        >
          <Image
            src={image}
            alt={alt}
            sizes="100%"
            fill
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
        {data.cards.map(({ ...data }, index) => (
          <Card key={index} {...data} />
        ))}
      </Stack>
    );
  };
  const OnboardingContainer = ({ children }) => {
    return (
      <Stack as="section" id="onboarding" spacing={0}>
        {children}
      </Stack>
    );
  };

  return (
    <OnboardingContainer>
      <Header title={data.header.title} description={data.header.description} />
      <Steps />
    </OnboardingContainer>
  );
}
