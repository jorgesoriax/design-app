import { Button } from "@chakra-ui/react";

export default function LYButton({ children, ...props }) {
  return (
    <Button
      {...props}
      fontWeight="semibold"
      fontSize={16}
    >
      {children}
    </Button>
  );
}
