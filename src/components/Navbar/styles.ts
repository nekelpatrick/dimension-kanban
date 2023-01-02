import { styled } from "../../styles/index";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Button";

export const Navbar = styled("nav", {
  display: "flex",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  width: "100%",

  height: "54px",
  maxHeight: "54px",

  zIndex: "99999",
  borderBottom: "1px solid $gray600",

  justifyContent: "space-between",

  backgroundColor: "$neutralWhite",

  padding: "0 6px 0 6px",

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
  borderRight: "1px solid $gray550",
  padding: "12px 15.5px 11px 0",
  marginLeft: "11.5px",
  marginRight: "24px",
  marginBottom: "0",
});

export const NavbarLinksArea = styled(Flex, {
  margin: "0",
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

export const InputArea = styled("div", {
  all: "unset",
  width: 175,
  height: 32,
  marginRight: "12px",

  backgroundColor: "$gray600",
  color: "$gray400",

  display: "inline-flex",

  alignItems: "center",
  justifyContent: "center",

  borderRadius: "8px",
  fontSize: 15,
  lineHeight: 1,

  "&:hover": { boxShadow: `0 0 0 2px black` },
});

export const Input = styled("input", {
  all: "unset",
  backgroundColor: "$gray600",
  color: "$gray400",

  fontSize: "12px",

  // "&:focus": { boxShadow: `0 0 0 2px black` },
});
