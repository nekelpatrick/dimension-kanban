import { styled } from "../../styles/index";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Button";

export const DashBar = styled("div", {
  position: "fixed",
  width: "56px",
  height: "100vh",
  zIndex: "99999",
  top: "54px",
  left: "0",
  // left: "-10px",
  backgroundColor: "$neutralWhite",
  justifyContent: "center",
  borderRight: "1px solid $gray550",
  marginRight: "24px",
});

export const NavbarLinks = styled(Flex, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
