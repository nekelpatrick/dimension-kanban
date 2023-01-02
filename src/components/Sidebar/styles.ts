import { styled } from "../../styles/index";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Button";

import * as Separator from "@radix-ui/react-separator";

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
