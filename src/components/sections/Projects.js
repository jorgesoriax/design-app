import Image from "next/image";
import { Box, Button, HStack, Stack, VStack } from "@chakra-ui/react";
import Header from "../Header";
import Carousel from "../Carousel";
import data from "../../data/projects.json";

export default function Projects() {
  const ProjectsContainer = ({ children }) => {
    return (
      <VStack as="section" spacing={0} py={{ base: 8, md: 12 }}>
        {children}
      </VStack>
    );
  };

  return (
    <ProjectsContainer>
      <HStack w="full" justify="space-between">
        <Header section={data.header.section} title={data.header.title} />
        <Button colorScheme="brand">{data.ctaButton}</Button>
      </HStack>
      <Carousel images={data.carousel.images} />
    </ProjectsContainer>
  );
}
