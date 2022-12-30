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
      brandPrimary500: "#4734FE",
      brandSucess500: "#78C552",

      // neutralBlack: "#111118",
      neutralBlack: "#78C552",

      neutralWhite: "#FFFFFF",
    },
  },
});
