import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import onboarding from "../content/onboarding";
import Header from "./Header";

export default function Onboarding() {
  const Card = ({ title, description, image }) => {
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
          <Image src={image} alt="hero image" fit="cover" />
        </Stack>
        <Text fontWeight="medium" fontSize={18}>
          {title}
        </Text>
        <Text color="gray.500">{description}</Text>
      </VStack>
    );
  };
  const Steps = () => {
    return (
      <Stack gap={8} direction="row" wrap="wrap" justify="center">
        {onboarding.map(({ ...onboarding }, index) => (
          <Card key={index} {...onboarding} />
        ))}
      </Stack>
    );
  };
  const OnboardingContainer = ({ children }) => {
    return (
      <Stack pb={{ base: 8, md: 12 }} py={{ base: 8, md: 12 }}>
        {children}
      </Stack>
    );
  };

  return (
    <OnboardingContainer>
      <Header
        section="¿Cómo consigues tu diseño?"
        title="Aterriza tus ideas de una manera simple"
      />
      <Steps />
    </OnboardingContainer>
  );
}
