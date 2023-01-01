import { styled } from "../../styles/index";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Button";

export const Navbar = styled("nav", {
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "17px 0 17px 0",
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
  paddingLeft: "6px",
  borderRight: "1px solid $gray550",
  padding: "0 16px 11px 0",
  marginLeft: "17px",
  marginRight: "24px",
});

export const NavbarLinksArea = styled(Flex, {
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
});
