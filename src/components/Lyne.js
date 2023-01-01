import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export function LYButton({ children, ...props }) {
  return (
    <Button {...props} fontWeight="medium" fontSize={16}>
      {children}
    </Button>
  );
}

export function LYLinkButton({ href, children, ...props }) {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Button as="a" {...props} fontWeight="medium" fontSize={16}>
        {children}
      </Button>
    </NextLink>
  );
}
