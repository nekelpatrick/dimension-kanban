import { styled } from "../../styles/index";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { relative } from "path";

export const Card = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
  alignItems: "center",

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

  gap: "6px",

  transition: "transform 0.3s ease",

  "&:active": {
    // transform: "rotate(3deg)",
    // zIndex: 999,
    // boxShadow: "0 0 0 2px black,",
  },
});

export const CardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  // alignItems: "center",
  width: "212px",

  margin: "6px 16px 12px 16x",
});

export const ProductCode = styled("div", {
  display: "flex",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "24px",
  letterSpacing: "0.6px",
  color: "#7F8995",
});

export const CardDescription = styled("p", {
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.2px",
  color: "#7f8995",
});

export const TagAssign = styled("span", {
  display: "flex",
  justifyContent: "space-between",
  margin: "12px 0 0 0",
});

export const CardTag = styled("span", {
  padding: "0",
  margin: "0",
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

export const CardFooter = styled("div", {
  // width: "244px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #EAEDF0",
});

export const FooterIconsArea = styled("span", {
  margin: "12px 0 12px 16px",

  display: "flex",
  flexDirection: "row",

  "> span": {
    display: "flex",
    flexDirection: "row",

    marginRight: "8px",
    fontSize: "12px",
    letterSpacing: "0.2px",
    color: "#98a5b3",
  },
});

export const AvatarArea = styled(AvatarPrimitive.Root, {});

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  position: "relative",

  display: "inline-block",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  userSelect: "none",

  width: 30,
  height: 30,

  borderRadius: "100%",
  backgroundColor: "white",
  border: "1px solid #FFFFFF",

  // "&:not(first-child)": {
  //   marginLeft: "-80px",
  // },

  "&:nth-child(n+2)": {
    marginLeft: "-10px",
  },

  variants: {
    exceeded: {
      exceedCount: {
        alignItems: "center",
        justifyContent: "center",
        background: "#CBD2D9",
      },
    },
  },
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
  margin: "0",
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "red",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const TitleAvatarExcessCount = styled("h5", {
  width: "100%",
  height: "100%",

  fontWeight: "400",
  lineHeight: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#656E77",
});
