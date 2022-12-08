import { Button, Heading, Stack } from "@chakra-ui/react";

export default function ReadyTo() {
  const Banner = () => {
    return (
      <Stack
        bgImage="url('/images/ready-to.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        align="center"
        py={{ base: 8, lg: 12 }}
        borderRadius="2xl"
        spacing={8}
      >
        <Heading color="white" fontWeight="medium">
         Consigue tu diseño único
        </Heading>
        <Button w="fit-content" color="brand.500">
          Servicios
        </Button>
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
