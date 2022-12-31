import { styled } from "../../styles/index";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Button";

export const Navbar = styled("nav", {
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",
  borderBottom: "1px solid $gray600",

  justifyContent: "space-between",

  backgroundColor: "$neutralWhite",

  display: "flex",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoMark = styled(Flex, {
  alignItems: "center",
  paddingLeft: "16px",
  borderRight: "1px solid $gray550",
  padding: "0 24px 11px 0",
  marginLeft: "9px",
});

export const NavbarLinks = styled(Flex, {
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
