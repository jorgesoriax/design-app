import { useState } from "react";
import Image from "next/image";
import { Box, Stack, Text, IconButton, HStack } from "@chakra-ui/react";
import { Aperture, CaretLeft, CaretRight } from "phosphor-react";

export default function Carousel({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectNextIndex = (index, data, next = true) => {
    const condition = next ? index < data.length - 1 : index > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : data.length - 1;

    setSelectedIndex(nextIndex);
  };
  const CategoryIndicator = () => {
    return (
      <Box pos="absolute" left={4} bottom={4}>
        <IconButton
          variant="solid"
          icon={<Aperture size={32} weight="fill" />}
          aria-label="Tipo de servicio"
        />
      </Box>
    );
  };
  const ItemIndicator = () => {
    const active = {
      w: "50px",
    };

    return (
      <HStack pos="absolute" right={4} top={4}>
        {data.map((item, index) => (
          <Box
            key={index}
            borderRadius="full"
            w={index == selectedIndex ? "32px" : "10px"}
            h="10px"
            bg="white"
          ></Box>
        ))}
      </HStack>
    );
  };
  const Controls = () => {
    return (
      <HStack pos="absolute" right={4} bottom={4}>
        <IconButton
          variant="solid"
          colorScheme="brand"
          icon={<CaretLeft size={32} weight="fill" />}
          aria-label="Previous image"
          onClick={() => selectNextIndex(selectedIndex, data, false)}
        />
        <IconButton
          variant="solid"
          colorScheme="brand"
          icon={<CaretRight size={32} weight="fill" />}
          aria-label="Next image"
          onClick={() => selectNextIndex(selectedIndex, data)}
        />
      </HStack>
    );
  };
  const CarouselContainer = ({ children }) => {
    return (
      <Stack
        pos="relative"
        spacing={0}
        overflow="hidden"
        borderRadius="2xl"
        w="100%"
        h={{base: "60vh", lg: "70vh"}}
      >
        <Image
          src={data[selectedIndex].url}
          alt={data[selectedIndex].alt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        {children}
      </Stack>
    );
  };

  return (
    <CarouselContainer>
      <ItemIndicator />
      <CategoryIndicator />
      <Controls />
    </CarouselContainer>
  );
}
