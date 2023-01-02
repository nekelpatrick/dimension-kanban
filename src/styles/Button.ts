import { styled } from "../styles/index";
import * as Toggle from "@radix-ui/react-toggle";

export const Button = styled("button", {
  all: "unset",
  textDecoration: "none",
  cursor: "pointer",

  fontSize: "1rem",

  margin: "2px",
  whiteSpace: "nowrap",
  width: "max-content",

  variants: {
    type: {
      primary: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "6px",
        fontSize: "14px",

        fontFamily: "GT Walsheim Pro",

        width: "auto",
        maxWidth: "70px",
        height: "30px",
        padding: "0 12px",

        border: "1px solid $gray500",
        borderRadius: "8px",
        boxShadow: "0 3px 0 0 #DFE1E4",

        transformStyle: "preserve-3d",
        transition: "all 75ms cubic-bezier(0,0,1,1)",

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
      navigationLinkCurrent: {
        color: "$gray200",
        textDecoration: "none",
      },
      navigationLink: {
        color: "$gray400",
        textDecoration: "none",
      },
      tag: {
        margin: "6px",
        width: "45px",
        height: "20px",
        borderRadius: "5px",
        padding: "3px 6px ",
        textAlign: "center",

        backgroundColor: "$gray590",
        color: "$gray400",
        fontWeight: "400",
      },
      sideButton: {
        display: "flex",
        height: "32px",
        width: "32px",
        marginRight: "24px",

        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        border: "1px solid $gray500",
      },
      sideBarButton: {
        height: "32px",
        width: "32px",

        borderRadius: "8px",
        border: "1px solid $gray500",
      },
    },
  },
});

export const ButtonToggle = styled(Toggle.Root, {
  all: "unset",
  height: 35,
  width: 35,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: 8,
  backgroundColor: "$gray600",

  marginBottom: "16px",

  "&:hover": { backgroundColor: "$violet500" },
  "&[data-state=on]": {},
  "&:focus": { backgroundColor: "$violet500", border: "1px solid $violet100" },
});

export const ButtonToggleAdd = styled(Toggle.Root, {
  all: "unset",
  height: 35,
  width: 35,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: 8,
  backgroundColor: "$gray600",

  marginBottom: "16px",

  "&:hover": { backgroundColor: "$violet500" },
  "&[data-state=on]": {},
  "&:focus": { backgroundColor: "$violet500", border: "1px solid $violet100" },
});
