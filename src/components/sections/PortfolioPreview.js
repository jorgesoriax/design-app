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
          title={data.header.title}
          description={data.header.description}
        />
        <LYLinkButton
          href={data.ctaButton.href}
          colorScheme="brand"
          rightIcon={<ArrowCircleUpRight size={32} weight="fill" />}
        >
          {data.ctaButton.title}
        </LYLinkButton>
      </Stack>
    );
  };
  const PortfolioPreviewContainer = ({ children }) => {
    return (
      <VStack as="section" id="portfolio-preview" spacing={{ base: 8, lg: 0 }}>
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
