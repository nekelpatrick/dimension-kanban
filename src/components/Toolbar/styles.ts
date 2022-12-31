import * as Toolbar from "@radix-ui/react-toolbar";
import { styled } from "../../styles";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const ToolbarRoot = styled(Toolbar.Root, {
  display: "flex",
  padding: 15,
  width: "100%",
  minWidth: "max-content",
  borderRadius: 6,
  backgroundColor: "white",
  flexDirection: "row",
  borderBottom: "1px solid $gray600",
  marginBottom: "24px",
  justifyContent: "space-between",
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
  // "&:hover": { backgroundColor: violet.violet3, color: violet.violet11 },
  // "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
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
  display: "flex",
});

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
