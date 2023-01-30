import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { MagicWand } from "phosphor-react";
import LYLinkButton from "../LYLinkButton";
import LYScrollLinkButton from "../LYScrollLinkButton";

export function HeroWithBackground({ data, ...props }) {
  const TextContent = () => {
    return (
      <Stack spacing={4} direction="column" maxW="650px">
        <Heading
          as="h1"
          fontSize={{ base: "5xl", lg: "6xl" }}
          color="white"
          textAlign="center"
        >
          {data.title}
        </Heading>
        <Text fontSize="lg" color="white" textAlign="center">
          {data.description}
        </Text>
      </Stack>
    );
  };
  const Actions = () => {
    return (
      <Stack
        align="center"
        spacing={{ base: 4, lg: 8 }}
        direction={{ base: "column", lg: "row" }}
      >
        <LYLinkButton
          href={data.ctaButton.href}
          colorScheme="brand"
          fontWeight="medium"
          leftIcon={<MagicWand size={28} weight="fill" />}
        >
          {data.ctaButton.title}
        </LYLinkButton>
        <LYScrollLinkButton href={data.secondaryButton.href}>
          {data.secondaryButton.title}
        </LYScrollLinkButton>
      </Stack>
    );
  };
  const CenterArea = () => {
    return (
      <VStack
        justify="center"
        align="center"
        spacing={12}
        // border="1px"
        mb={12}
        // borderColor="gray.200"
        borderRadius="2xl"
        h="100%"
        p={8}
        bgImage="url('/static/images/hero.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <TextContent />
        <Actions />
      </VStack>
    );
  };
  const HeroWithBackgroundContainer = ({ children }) => {
    return (
      <Stack as="section" id="hero" {...props} justify="center" w="100%">
        {children}
      </Stack>
    );
  };
  return (
    <HeroWithBackgroundContainer>
      <CenterArea />
    </HeroWithBackgroundContainer>
  );
}
