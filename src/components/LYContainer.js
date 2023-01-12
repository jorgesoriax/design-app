import { Container, Stack } from "@chakra-ui/react";

export default function LYContainer({ children, ...props }) {
  return (
    <Container
      {...props}
      maxW={{ base: "100%", md: "80%" }}
      p={{ base: 6, md: 0 }}
      pb={{ base: 6, md: 12 }}
    >
      <Stack spacing={{ base: 16, md: 32 }}>{children}</Stack>
    </Container>
  );
}
