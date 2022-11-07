import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50:  "#fbe9e7",
    100: "#ffccbc",
    200: "#ffab91",
    300: "#ff8a65",
    400: "#ff6f42",
    500: "#ff5621",
    600: "#f6501d",
    700: "#e84918",
    800: "#da4114",
    900: "#c1340a",
  },
};
const fonts = {
  heading: `"Open Sans", sans-serif`,
  body: `"Inter", sans-serif`,
};
const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};
const styles = {
  global: (props) => ({
    "html, body": {
      color: props.colorMode === "dark" ? "white" : "#2d3748",
    },
  }),
};
const theme = extendTheme({ colors, fonts, config, styles });

export default theme;
