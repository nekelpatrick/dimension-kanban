import { styled } from "@stitches/react";
import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$neutralWhite",
    color: "$neutralBlack",
  },

  "body, input, textarea, button": {
    fontFamily: "GT Walsheim",
    fontWeight: 400,
  },
});

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});
