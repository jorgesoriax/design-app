import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EnvelopeSimple, Minus, Phone, Plus } from "phosphor-react";
import contact from "../../data/contact.json";
import Header from "../Header";
import LYLinkButton from "../LYLinkButton";

export default function FAQ({ data }) {
  const Contact = () => {
    return (
      <Stack
        spacing={4}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <LYLinkButton href="#">{contact.email}</LYLinkButton>
        <LYLinkButton href="#" target="_blank" rel="noopener noreferrer">
          {contact.number}
        </LYLinkButton>
      </Stack>
    );
  };
  const AccordionContainer = () => {
    return (
      <Accordion pb={{ base: 8, md: 12 }} allowMultiple>
        <VStack spacing={4}>
          {data.faq.map(({ question, answer }, index) => (
            <AccordionItem key={index} border={0} w="full">
              {({ isExpanded }) => (
                <Stack
                  spacing={0}
                  borderRadius="2xl"
                  py={2}
                  px={{ base: 2, lg: 4 }}
                  bg={isExpanded ? "gray.100" : ""}
                  role="group"
                  _hover={{
                    bg: "brand.50",
                  }}
                >
                  <h3>
                    <AccordionButton
                      transition="none"
                      _hover={{
                        bg: "transparent",
                        color: "brand.500",
                      }}
                      _groupHover={{
                        bg: "transparent",
                        color: "brand.500",
                      }}
                      _focus={{
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      <Text
                        flex={1}
                        fontSize={18}
                        fontWeight="medium"
                        textAlign="left"
                      >
                        {question}
                      </Text>
                      {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
                    </AccordionButton>
                  </h3>
                  <AccordionPanel color="gray.500">{answer}</AccordionPanel>
                </Stack>
              )}
            </AccordionItem>
          ))}
        </VStack>
      </Accordion>
    );
  };
  const FAQContainer = ({ children }) => {
    return <Stack as="section">{children}</Stack>;
  };

  return (
    <FAQContainer>
      <Header title={data.header.title} description={data.header.description} />
      <AccordionContainer />
      <Contact />
    </FAQContainer>
  );
}
