import { Button } from "@chakra-ui/react";

export default function LYButton({ children, ...props }) {
  return (
    <Button {...props} minW="fit-content" fontWeight="medium" fontSize={16}>
      {children}
    </Button>
  );
}
