import { useState } from "react";
import Image from "next/image";
import { Box, Stack, Text, IconButton, HStack } from "@chakra-ui/react";
import { Aperture, CaretLeft, CaretRight } from "phosphor-react";


export default function Carousel({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectNexIndex = (index, images, next = true) => {
    const condition = next ? index < images.length - 1 : index > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
        ? selectedIndex - 1
        : images.length - 1;

    setSelectedIndex(nextIndex);
  };
  const CategoryIndicator = () => {
    return (
      <Box pos="absolute" left={4} bottom={4}>
        <IconButton
          variant="solid"
          icon={<Aperture size={26} weight="fill" />}
          aria-label="Tipo de servicio"
        />
      </Box>
    );
  };
  const ItemIndicator = () => {
    return (
      <Box pos="absolute" right={4} top={4}>
        <Stack
          align="center"
          justify="center"
          borderRadius="full"
          boxSize="50px"
          bg="white"
        >
          <Text fontSize={14} fontWeight="medium">
            {selectedIndex + 1} / {images.length}
          </Text>
        </Stack>
      </Box>
    );
  };
  const Controls = () => {
    return (
      <HStack pos="absolute" right={4} bottom={4}>
        <IconButton
          variant="solid"
          colorScheme="brand"
          icon={<CaretLeft size={26} weight="fill" />}
          aria-label="Previous image"
          onClick={() => selectNexIndex(selectedIndex, images, false)}
        />
        <IconButton
          variant="solid"
          colorScheme="brand"
          icon={<CaretRight size={26} weight="fill" />}
          aria-label="Next image"
          onClick={() => selectNexIndex(selectedIndex, images)}
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
        border="1px"
        borderColor="gray.200"
        borderRadius="2.5rem"
        w="100%"
        h="500px"
      >
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].alt}
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
