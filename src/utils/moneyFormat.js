import { Text } from "@chakra-ui/react";

export default function moneyFormat(amount) {
  const amountFormated = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MXN",
  }).format(amount);

  return <Text>{amountFormated}</Text>;
}
