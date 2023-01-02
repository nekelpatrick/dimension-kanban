import { styled } from "../../styles/index";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const Card = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "34px 0px 12px 0",
  // gap: "12px",
  width: "244px",
  maxHeight: "238px",
  background: "#FFFFFF",
  border: "1px solid #EAEDF0",
  borderRadius: "12px",
  flex: "none",
  order: 0,
  alignSelf: "stretch",
  flexGrow: 0,
  zIndex: 1,
  margin: "24px 0 0 24px",
});

export const ProductCode = styled("div", {});

export const CardFooter = styled("div", {});

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  borderRadius: "100%",
  backgroundColor: "white",
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "white",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});
