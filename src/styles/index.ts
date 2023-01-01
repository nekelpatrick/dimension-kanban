import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray700: "#F4F4F4",
      gray600: "#F5F5F5",
      gray590: "#EEEEEE",
      gray550: "#EAEDF0",
      gray500: "#DFE1E4",
      gray400: "#6C6F75",
      gray200: "#282A2F",

      brandPrimary500: "#4734FE",
      brandSucess500: "#78C552",

      neutralBlack: "#111118",
      neutralWhite: "#FFFFFF",
    },
    fonts: {
      titles: "GT Walsheim pro, sans-serif;",
      texts: '"GT Walsheim pro", sans-serif',
    },
  },
});
