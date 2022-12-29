import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import onboarding from "../content/onboarding";
import Header from "./Header";

export default function Onboarding() {
  const Card = ({ title, description, image }) => {
    return (
      <VStack
        spacing={0}
        w={{ base: "100%", md: "300px" }}
        align="center"
        border="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        p={{ base: 4, md: 6 }}
        overflow="hidden"
      >
        <Stack boxSize={{base: "200px", lg: "300px"}} justify="center" align="center">
          <Image src={image} alt="hero image" fit="cover" />
        </Stack>
        <Box>
          <Heading as="h2" fontWeight="extrabold" fontSize={26} textAlign="center">
            {title}
          </Heading>
          <Text color="gray.500" textAlign="center">
            {description}
          </Text>
        </Box>
      </VStack>
    );
  };
  const Steps = () => {
    return (
      <Stack spacing={0} gap={8} direction="row" wrap="wrap" justify="center">
        {onboarding.map(({ ...onboarding }, index) => (
          <Card key={index} {...onboarding} />
        ))}
      </Stack>
    );
  };
  const OnboardingContainer = ({ children }) => {
    return <Stack py={{ base: 8, md: 12 }}>{children}</Stack>;
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
