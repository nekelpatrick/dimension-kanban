import { styled } from "../../styles/index";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Button";

import * as Separator from "@radix-ui/react-separator";
import * as Toggle from "@radix-ui/react-toggle";

export const DashBar = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  width: "56px",
  height: "100vh",
  zIndex: "99999",
  top: "54px",
  left: "0",
  backgroundColor: "$neutralWhite",
  borderRight: "1px solid $gray550",
});

export const LinksArea = styled(Flex, {
  display: "flex",
  flexDirection: "column",
  "@mobile": {
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 0,
    },
  },
});

export const SeparatorComponent = styled(Separator.Root, {
  margin: "0 0 11px 0",
  // backgroundColor: "$gray600",
  borderBottom: "1px solid $gray600",
  "&[data-orientation=horizontal]": { height: 1, width: "32px" },
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
  "&:focus": {
    backgroundColor: "$violet500",
    border: "1px solid $violet100",
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

  // "&:before": {
  //   content: "",
  //   position: "absolute",
  //   height: "23px",
  //   width: "2px",
  //   left: "0px",
  //   // top: "0",
  //   background: "$violet100",
  //   borderRadius: "0 6px 6px 0",
  // },

  // "&[data-active='true']:before": {
  //   content: "",
  //   position: "absolute",
  //   height: "5%",
  //   width: "2px",
  //   left: "0px",
  //   // top: "0",
  //   background: "$violet100",
  //   borderRadius: "0 6px 6px 0",
  // },
  "&:focus": { backgroundColor: "$violet500", border: "1px solid $violet100" },
});

export const ButtonToggleActive = styled(Toggle.Root, {
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

  "&:before": {
    content: "",
    position: "absolute",
    height: "23px",
    width: "2px",
    left: "0px",
    // top: "0",
    background: "$violet100",
    borderRadius: "0 6px 6px 0",
  },
  "&:focus": { backgroundColor: "$violet500", border: "1px solid $violet100" },
});

export const AreaToggle = styled(Toggle.Root, {
  all: "unset",

  "&:focus": { backgroundColor: "$violet500", border: "1px solid $violet100" },
  "&:focus::before": {},
});
