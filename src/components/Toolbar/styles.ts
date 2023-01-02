import * as Toolbar from "@radix-ui/react-toolbar";
import { styled } from "../../styles";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import * as Switch from "@radix-ui/react-switch";

export const ToolbarRoot = styled(Toolbar.Root, {
  all: "unset",
  margin: "0",

  display: "flex",
  width: "100%",
  minWidth: "max-content",

  height: "48px",

  paddingBottom: "3px",

  flexDirection: "row",
  borderBottom: "1px solid $gray600",
  marginBottom: "24px",

  justifyContent: "space-between",
  alignItems: "center",
});

export const itemStyles = {
  all: "unset",
  flex: "0 0 auto",
  // color: mauve.mauve11,
  height: 25,
  padding: "0 5px",
  borderRadius: 4,
  display: "inline-flex",
  fontSize: 13,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const ToolbarToggleItem = styled(Toolbar.ToggleItem, {
  ...itemStyles,
  backgroundColor: "white",
  marginLeft: 2,
  "&:first-child": { marginLeft: 0 },
  "&[data-state=on]": {
    // backgroundColor: violet.violet5,
    // color: violet.violet11,
  },
});

export const ToolbarSeparator = styled(Toolbar.Separator, {
  width: 1,

  margin: "0 10px",
});

export const ToolbarLink = styled(
  Toolbar.Link,
  {
    ...itemStyles,
    backgroundColor: "transparent",
    // color: mauve.mauve11,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  { "&:hover": { backgroundColor: "transparent", cursor: "pointer" } }
);

export const ToolbarButton = styled(
  Toolbar.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    // backgroundColor: violet.violet9,
  }
  // { "&:hover": { backgroundColor: violet.violet10 } }
);

export const ToolbarToggleGroup = styled(Toolbar.ToggleGroup, {
  ...itemStyles,
  margin: "0 24px 0 0",
  padding: "0",

  display: "flex",
});

export const AvatarArea = styled(AvatarPrimitive.Root, {
  margin: "16px",
});

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 28,
  height: 28,

  margin: "4px",

  borderRadius: "100%",
  backgroundColor: "$gray600",
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
  backgroundColor: "$gray600",
  color: "red",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const SwitchButton = styled(Switch.Root, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "6px",

  fontFamily: "GT Walsheim Pro",
  fontSize: "12px",

  width: "auto",
  maxWidth: "75px",
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
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": {
    boxShadow: "0 3px 0 0 #DFE1E4",
  },
  '&[data-state="checked"]': {},
});
