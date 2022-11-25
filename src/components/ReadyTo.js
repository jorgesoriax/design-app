import { Button, Heading, Stack } from "@chakra-ui/react";

export default function ReadyTo() {
  const Banner = () => {
    return (
      <Stack
        bgImage="url('/images/ready-to-2.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        align="center"
        py={14}
        borderRadius="2xl"
        spacing={8}
      >
        <Heading color="white" fontWeight="semibold">
          ¿Qué dices, estás listx?
        </Heading>
        <Button w="fit-content" color="brand.500">
          ¡Comencemos a crear!
        </Button>
      </Stack>
    );
  };
  const ReadyToContainer = ({ children }) => {
    return <Stack py={12}>{children}</Stack>;
  };

  return (
    <ReadyToContainer>
      <Banner />
    </ReadyToContainer>
  );
}
