import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "./Header";
import faq from "../content/faq.json";
import {
  At,
  Minus,
  PaperPlaneTilt,
  Plus,
  WhatsappLogo,
  X,
} from "phosphor-react";
import NextLink from "next/link";

export default function Faq() {
  const Contact = () => {
    return (
      <HStack spacing={4}>
        <NextLink href="#" legacyBehavior passHref>
          <Button as="a" leftIcon={<PaperPlaneTilt size={24} weight="fill" />}>
            example.support@design.com
          </Button>
        </NextLink>
        <NextLink href="#" legacyBehavior passHref>
          <Button as="a" leftIcon={<WhatsappLogo size={26} weight="fill" />}>
            +52 81 1234 5678
          </Button>
        </NextLink>
      </HStack>
    );
  };
  const AccordionContainer = () => {
    return (
      <Accordion allowMultiple pb={12}>
        <VStack spacing={4}>
          {faq.map(({ question, answer }, index) => (
            <AccordionItem w="full" border={0}>
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
      <Stack spacing={0} pb={{ base: 8, md: 12 }} border="1px solid red">
        {children}
      </Stack>
    );
  };

  return (
    <FaqContainer>
      <Header section="Preguntas frecuentes" title="¿Tienes alguna duda?" />
      <AccordionContainer />
      <Contact />
    </FaqContainer>
  );
}
