import Image from "next/image";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Bag, Check } from "phosphor-react";
import LYLinkButton from "../LYLinkButton";
import data from "../../data/services/pricing.json";
import moneyFormat from "../../utils/moneyFormat";

export default function Pricing() {
  const PriceCard = ({ title, description, basePrice, features }) => {
    return (
      <VStack
        justify="space-between"
        spacing={4}
        border="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        h="100%"
        p={{ base: 4, lg: 6 }}
        bg="white"
      >
        <VStack spacing={4} width="100%">
          <Box w="100%" h="50px">
            {/* <Image
            src={"/static/images/hero.jpg"}
            alt="test"
            sizes="100%"
            fill
            style={{ objectFit: "contain" }}
          /> */}
            <Bag size={48} />
          </Box>
          <VStack align="left" spacing={0} w="100%">
            <Heading as="h4" fontSize={26}>
              {title}
            </Heading>
            <Text color="gray.500">{description}</Text>
          </VStack>
          <VStack align="left" spacing={0} w="100%">
            <Text color="gray.500">Desde</Text>
            <Heading as="h4" fontSize={26}>
              {moneyFormat(basePrice)}
            </Heading>
          </VStack>
          <List w="100%">
            {features.map((feature, index) => (
              <ListItem key={index}>
                <HStack>
                  <Check size={24} weight="fill" />
                  <Text>{feature}</Text>
                </HStack>
              </ListItem>
            ))}
          </List>
        </VStack>
        <LYLinkButton href="#" width="100%">
          Lo quiero
        </LYLinkButton>
      </VStack>
    );
  };
  const PricingContainer = () => {
    return (
      <Grid
        gridTemplateColumns={{
          base: "100%",
          md: "repeat(2, calc(50% - 1rem))",
          lg: "repeat(3, calc(33.33% - 1.33rem))",
          xl: "repeat(4, calc(25% - 1.5rem))",
        }}
        gap={8}
      >
        {data.services.map(({ ...data }, index) => (
          <GridItem key={index}>
            <PriceCard {...data} />
          </GridItem>
        ))}
      </Grid>
    );
  };

  return <PricingContainer />;
}
