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
  maxHeight: "260px",
  background: "#FFFFFF",
  border: "1px solid #EAEDF0",
  borderRadius: "12px",
  flex: "none",
  order: 0,
  alignSelf: "stretch",
  flexGrow: 0,
  zIndex: 1,
  margin: "24px 0 24px 0",
});

export const ProductCode = styled("div", {
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "24px",
  letterSpacing: "0.6px",
  color: "#7F8995",
});

export const CardContent = styled("div", {});

export const CardDescription = styled("p", {
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.2px",
  color: "#7f8995",
});

export const CardTag = styled("label", {
  variants: {
    color: {
      green: {
        background: "#F1F9EE",
        color: "#78c552",
      },
      violet: {
        background: "#EDEBFF",
        color: "#8478FE",
      },
      blue: {
        background: "#EAF0FF",
        color: "#2F6BFE",
      },
    },
  },

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 8px",
  gap: "8px",

  width: "69px",
  height: "24px",

  background: "$gray500",
  borderRadius: "6px",
});

export const CardTagText = styled("p", {
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.2px",
});

export const CardFooter = styled("div", {});

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 30,
  height: 30,
  borderRadius: "100%",
  backgroundColor: "white",
  border: "1px solid #FFFFFF",
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
