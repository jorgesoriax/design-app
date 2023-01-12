import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

export default function LYLinkButton({ href, children, ...props }) {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Button as="a" {...props} fontWeight="medium" fontSize={16}>
        {children}
      </Button>
    </NextLink>
  );
}
