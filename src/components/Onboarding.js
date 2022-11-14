import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import onboarding from "../content/onboarding";
import Header from "./Header";

export default function Onboarding() {
  const Card = ({ title, description }) => {
    return (
      <VStack w="300px" align="left">
        <Stack
          border="1px"
          borderColor="gray.200"
          boxSize="300px"
          borderRadius="3xl"
          mb={4}
          justify="center"
          align="center"
        >
          <Image src="/images/card.png" alt="hero image" fit="cover" />
        </Stack>
        <Text fontWeight="medium" fontSize={18}>{title}</Text>
        <Text color="gray.500">{description}</Text>
      </VStack>
    );
  };
  const Steps = () => {
    return (
      <Stack gap={8} direction="row" wrap="wrap" justify="center">
        {onboarding.map(({ title, description }, index) => (
          <Card key={index} title={title} description={description} />
        ))}
      </Stack>
    );
  };
  const OnboardingContainer = ({ children }) => {
    return (
      <Stack border="1px" borderColor="red" pb={{ base: 8, md: 12 }}>
        {children}
      </Stack>
    );
  };

  return (
    <OnboardingContainer>
      <Header section="Tellus enim?" title="Dolor sit amet consectetur" />
      <Steps />
    </OnboardingContainer>
  );
}
