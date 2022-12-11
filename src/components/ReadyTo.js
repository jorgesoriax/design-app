import { Button, Heading, Stack } from "@chakra-ui/react";

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
        py={{ base: 8, md: 12 }}
        border="1px"
        borderColor="brand.500"
        borderRadius="2xl"
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
