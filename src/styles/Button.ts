import { styled } from "../styles/index";

export const Button = styled("button", {
  height: "3rem",
  appearance: "none",
  fontWeight: "500",
  padding: "0 1rem",
  border: "2px solid $neutralWhite",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  whiteSpace: "nowrap",
  textDecoration: "none",
  margin: "2px",

  // position: absolute;
  // width: 57px;
  // height: 30px;
  // left: 154px;
  // top: 61px;

  // background: #FFFFFF;
  // border: 1px solid #DFE1E4;
  // box-shadow: 0px 3px 0px #DFE1E4;
  // border-radius: 8px;

  variants: {
    type: {
      primary: {
        // position: "absolute",
        width: "57px",
        height: "30px",

        border: "1px solid $gray500",
        borderRadius: "8px",
        boxShadow: "0 3px 0 0 #DFE1E4",

        transformStyle: "preserve-3d",
        transition: "all 175ms cubic-bezier(0,0,1,1)",

        background: "$neutralWhite",
        color: "$gray400",

        "&:before": {
          position: "absolute",
          content: "",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "gray500",
          borderRadius: "inherit",
          boxShadow: "0px 3px 0px $gray500",
          transform: "translate3d(0, 0.75em, -1em)",
        },
        "&:hover": {
          backgroundColor: "$brand2",
          borderColor: "$brand2",
        },
        "&:active": {
          transform: "translate(0em, 0.25em)",
        },
        "&:active::before": {
          transform: "translate3d(0, 0, -0.50em)",
        },
        "@mobile": {
          height: "2.5rem",
          minHeight: "2.5rem",
          borderRadius: "0.5rem",
        },
      },
      secondary: {
        width: "32px",
        height: "32px",

        backgroundColor: "$gray600",
        margin: "8px",
      },
    },
  },
});
