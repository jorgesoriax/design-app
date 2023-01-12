import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { MagicWand } from "phosphor-react";
import LYLinkButton from "../components/LYLinkButton";

// export function HeroWithGraphic({ data, ...props }) {
//   const Graphic = () => {
//     return (
//       <Stack
//         borderRadius="2xl"
//         overflow="hidden"
//         h="500px"
//         w="100%"
//         pos="relative"
//         border="1px solid red"
//       >
//         <Image
//           src="/static/images/test.png"
//           fill
//           style={{
//             objectFit: "cover",
//           }}
//         />
//       </Stack>
//     );
//   };
//   const TextContent = () => {
//     return (
//       <VStack align="left" spacing={4}>
//         <Heading as="h1" fontSize="6xl" fontWeight="extrabold">
//           {data.title}
//         </Heading>
//         <Text fontSize="lg" color="gray.600">
//           {data.description}
//         </Text>
//       </VStack>
//     );
//   };
//   const Actions = () => {
//     return (
//       <Stack
//         justify="left"
//         spacing={{ base: 4, lg: 8 }}
//         direction={{ base: "column", md: "column", lg: "row" }}
//         border="1px solid red"
//       >
//         <LYLinkButton
//           href={data.ctaButton.href}
//           colorScheme="brand"
//           fontWeight="medium"
//         >
//           {data.ctaButton.title}
//         </LYLinkButton>
//         <LYLinkButton href={data.secondaryButton.href} variant="outline">
//           {data.secondaryButton.title}
//         </LYLinkButton>
//       </Stack>
//     );
//   };
//   const LeftArea = () => {
//     return (
//       <VStack align="left" justify="end" spacing={12}>
//         <TextContent />
//         <Actions />
//       </VStack>
//     );
//   };
//   const HeroWithGraphicContainer = ({ children }) => {
//     return (
//       <Stack
//         as="section"
//         align="center"
//         justify="center"
//         w="100%"
//         h={props.h ? props.h : "fit-content"}
//         border="1px solid green"
//       >
//         <Stack
//           justify="center"
//           spacing={14}
//           direction={{ base: "column-reverse", lg: "row" }}
//           border="1px solid blue"
//           w="100%"
//         >
//           {children}
//         </Stack>
//       </Stack>
//     );
//   };

//   return (
//     <HeroWithGraphicContainer>
//       <LeftArea />
//       <Graphic />
//     </HeroWithGraphicContainer>
//   );
// }

export function HeroWithBackground({ data, ...props }) {
  const TextContent = () => {
    return (
      <Stack spacing={4} direction="column" maxW="700px">
        <Heading
          as="h1"
          fontSize={{ base: "5xl", lg: "6xl" }}
          fontWeight="extrabold"
          textAlign="center"
        >
          {data.title}
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          {data.description}
        </Text>
      </Stack>
    );
  };
  const Actions = () => {
    return (
      <Stack
        spacing={{ base: 4, lg: 8 }}
        direction={{ base: "column", lg: "row" }}
      >
        <LYLinkButton
          href={data.ctaButton.href}
          colorScheme="brand"
          fontWeight="medium"
        >
          {data.ctaButton.title}
        </LYLinkButton>
        <LYLinkButton href={data.secondaryButton.href} variant="outline">
          {data.secondaryButton.title}
        </LYLinkButton>
      </Stack>
    );
  };
  const CenterArea = () => {
    return (
      <VStack
        justify="center"
        align="center"
        spacing={12}
        border="1px"
        mb={12}
        borderColor="gray.200"
        borderRadius="2xl"
        h="100%"
        p={8}
        // bgImage="url('/static/images/ready-to.jpg')"
        // bgPosition="center"
        // bgRepeat="no-repeat"
        // bgSize="cover"
      >
        <TextContent />
        <Actions />
      </VStack>
    );
  };
  const HeroWithBackgroundContainer = ({ children }) => {
    return (
      <Stack w="100%" {...props} justify="center">
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
