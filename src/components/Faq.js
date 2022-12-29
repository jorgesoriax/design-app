import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "./Header";
import faq from "../content/faq.json";
import {
  EnvelopeSimple,
  Minus,
  Phone,
  Plus,
} from "phosphor-react";
import NextLink from "next/link";
import LYButton from "./LYButton";

export default function Faq() {
  const Contact = () => {
    return (
      <Stack
        spacing={4}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <NextLink href="#" legacyBehavior passHref>
          <LYButton as="a" leftIcon={<EnvelopeSimple size={26} weight="fill" />}  fontWeight="medium">
            example.support@design.com
          </LYButton>
        </NextLink>
        <NextLink href="#" legacyBehavior passHref>
          <LYButton
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<Phone size={26} weight="fill" />}
            fontWeight="medium"
          >
            +52 81 1234 5678
          </LYButton>
        </NextLink>
      </Stack>
    );
  };
  const AccordionContainer = () => {
    return (
      <Accordion allowMultiple pb={{ base: 8, md: 12 }}>
        <VStack spacing={4}>
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={index} w="full" border={0}>
              {({ isExpanded }) => (
                <Stack
                  spacing={0}
                  borderRadius="2xl"
                  py={2}
                  px={4}
                  bg={isExpanded ? "gray.100" : ""}
                  _hover={{
                    bg: "brand.50",
                  }}
                  role="group"
                >
                  <h2>
                    <AccordionButton
                      _hover={{
                        bg: "transparent",
                        color: "brand.500",
                      }}
                      _groupHover={{
                        bg: "transparent",
                        color: "brand.500",
                      }}
                      _focus={{
                        "-webkit-tap-highlight-color": "transparent",
                      }}
                      transition="none"
                    >
                      <Text
                        flex={1}
                        textAlign="left"
                        fontWeight="medium"
                        fontSize={18}
                      >
                        {question}
                      </Text>
                      {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
                    </AccordionButton>
                  </h2>
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
      <Stack spacing={0} py={{ base: 8, md: 12 }}>
        {children}
      </Stack>
    );
  };

  return (
    <FaqContainer>
      <Header
        section="Preguntas frecuentes"
        title="Didn’t find what you were looking for?"
      />
      <AccordionContainer />
      <Contact />
    </FaqContainer>
  );
}
