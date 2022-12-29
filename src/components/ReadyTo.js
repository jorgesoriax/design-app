import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import LYButton from "./LYButton";

export default function ReadyTo() {
  const Banner = () => {
    return (
      <Stack
        bgImage="url('/static/images/ready-to.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        align="center"
        spacing={8}
        p={{ base: 8, md: 12 }}
        borderRadius="2xl"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading as="h2" color="white" fontWeight="extrabold">
            Ready to start creating?
          </Heading>
          <Text color="white">
            Unlock access to every existing design on Storytale and upcoming
            releases during whole subscribtion
          </Text>
        </VStack>
        <LYButton w="fit-content" color="brand.500">
          Get full access
        </LYButton>
      </Stack>
    );
  };
  const ReadyToContainer = ({ children }) => {
    return <Stack py={{ base: 8, md: 12 }}>{children}</Stack>;
  };

  return (
    <ReadyToContainer>
      <Banner />
    </ReadyToContainer>
  );
}
