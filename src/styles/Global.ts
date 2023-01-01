import { styled } from "@stitches/react";
import { globalCss } from ".";

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontDisplay: "swap",
      fontFamily: "GT Walsheim Pro",
      src: `url(/fonts/GT-Walsheim-Regular-Trial.woff2)`,
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      fontDisplay: "swap",
      fontFamily: "GT Walsheim Pro",
      src: `url(/fonts/GT-Walsheim-Bold-Trial.woff2)`,
      fontWeight: 700,
      fontStyle: "bold",
    },
  ],

  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "GT Walsheim Pro",
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$neutralWhite",
    color: "$neutralBlack",
  },

  "body, input, textarea, button": {
    fontFamily: "GT Walsheim pro",
    fontWeight: 400,
  },

  "h1,h2,h3,h4,h5": {
    fontFamily: "GT Walsheim PRO",
    fontWeight: 700,
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
