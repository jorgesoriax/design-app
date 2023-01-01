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
import data from "../../data/faq.json";
import contact from "../../data/contact.json";
import Header from "../Header";
import { LYLinkButton } from "../Lyne";

export default function Faq() {
  const Contact = () => {
    return (
      <Stack
        spacing={4}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <LYLinkButton
          href="#"
          leftIcon={<EnvelopeSimple size={26} weight="fill" />}
        >
          {contact.email}
        </LYLinkButton>
        <LYLinkButton
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={<Phone size={26} weight="fill" />}
        >
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
                  px={4}
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
  const FaqContainer = ({ children }) => {
    return (
      <Stack as="section" spacing={0} py={{ base: 8, md: 12 }}>
        {children}
      </Stack>
    );
  };

  return (
    <FaqContainer>
      <Header section={data.header.section} title={data.header.title} />
      <AccordionContainer />
      <Contact />
    </FaqContainer>
  );
}
