import { Button, useMediaQuery } from "@chakra-ui/react";
import { Link as ReactScrollLink } from "react-scroll";

export default function LYScrollLinkButton({ href, children, ...props}) {
  // Se usa hook useMediaQuery para determinar el offset que tomará el Link de react-scroll,
  // este offset es el 50% en pixeles del spacing para el Stack hijo de LYContainer,
  // por lo que si dicho offset es igual a -32px, entonces el spacing al 100% son 16(4rem = 64px)
  // y asi respectivamente para -64px y 32(8rem = 128px)
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  const scrollOffset = !isLargerThanMd ? -32 : -64;

  return (
    <ReactScrollLink to={href} smooth={true} offset={scrollOffset} duration={0}>
      <Button {...props} fontWeight="medium" fontSize={16} outline="none">
        {children}
      </Button>
    </ReactScrollLink>
  );
}
