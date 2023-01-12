import Header from "../Header";
import Carousel from "../Carousel";
import { HStack, Stack, VStack } from "@chakra-ui/react";
import LYLinkButton from "../LYLinkButton";
import { ArrowCircleUpRight } from "phosphor-react";

export default function PortfolioPreview({ data }) {
  const HeaderWithAction = () => {
    return (
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="100%"
        spacing={{ base: 0, lg: 8 }}
      >
        <Header
          title="Get once, use forever"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit, lectus quis..."
        />
        <LYLinkButton
          href="#"
          colorScheme="brand"
          rightIcon={<ArrowCircleUpRight size={32} weight="fill" />}
        >
          Veamos más
        </LYLinkButton>
      </Stack>
    );
  };
  const PortfolioPreviewContainer = ({ children }) => {
    return (
      <VStack as="section" spacing={{ base: 8, lg: 0 }}>
        {children}
      </VStack>
    );
  };

  return (
    <PortfolioPreviewContainer>
      <HeaderWithAction />
      <Carousel data={data.carouselImages} />
    </PortfolioPreviewContainer>
  );
}
