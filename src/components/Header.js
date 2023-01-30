import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Header({ section, title, description, ...props }) {
  return (
    <VStack align="left" mb={12} w="100%" {...props}>
      {section ? <Text color="gray.500">{section}</Text> : ""}
      <Heading
        as="h2"
        fontSize={{ base: 32, md: 45 }}
        lineHeight="1"
      >
        {title}
      </Heading>
      {description ? <Text color="gray.500">{description}</Text> : ""}
    </VStack>
  );
}
