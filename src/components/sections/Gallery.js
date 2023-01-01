import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import Header from "../Header";
import gallery from "../../data/gallery.json";
import Image from "next/image";

export default function Gallery() {
  const Card = ({ imageUrl, imageAlt }) => {
    return (
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        boxSize="300px"
        position="relative"
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="300px"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
    );
  };
  const Projects = () => {
    return (
      <Stack direction="row" gap={8} wrap="wrap" justify="center">
        {gallery.map(({ url, title }, index) => (
          <Card key={index} imageUrl={url} imageAlt={title} />
        ))}
      </Stack>
    );
  };
  const GalleryContainer = ({ children }) => {
    return (
      <VStack as="section" spacing={0} py={{ base: 8, md: 12 }}>
        {children}
      </VStack>
    );
  };

  return (
    <GalleryContainer>
      <HStack w="full" justify="space-between">
        <Header
          section="Galería de proyectos"
          title="Descubre la inspiración"
        />
        {/* <Button
          colorScheme="brand"
          leftIcon={<CirclesThreePlus size={24} weight="fill" />}
        >
          Muestrame el resto
        </Button> */}
      </HStack>
      <Projects />
    </GalleryContainer>
  );
}
