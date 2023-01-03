import { styled } from "..";

export const HomeContainer = styled("main", {
  position: "absolute",
  top: "54px",
  left: "56px",
  right: "0",
  bottom: "0",
  marginTop: "24px",
  // marginLeft: "24px",
  // marginBottom: "24px",
  // width: "100%",
});

export const ColumnArea = styled("div", {
  display: "flex",
  maxHeight: "100vh",
});

export const BoardCardsArea = styled("div", {
  overflowY: "auto",
  overflowX: "hidden",
  // height: "600px",
  // maxHeight: "calc(100vh - 290px)",
});

export const BoardColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  // maxWidth: "2px",

  backgroundColor: "$gray-100",
  borderRadius: "$md",
  boxShadow: "$md",
  position: "relative",
  overflow: "hidden",
  height: "600px",
  margin: "0 12px 0 24px",

  "&.isDraggingOver": {
    padding: "1px",
    borderRadius: "12px",
    backgroundColor: "#F7F9FA",
  },
});

export const AddTaskButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "$3 0",
  fontSize: "$lg",
  "> span": {
    marginRight: "$2",
  },
});

export const AddNewCard = styled("div", {
  padding: "$3",
});

export const ColumnHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  paddingBottom: "1.5rem",
  flexDirection: "column",
  maxWidth: "244px",
});

export const ColumnHeaderTitle = styled("h4", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "244px",
  fontWeight: 700,
  fontSize: "14px",
  textTransform: "uppercase",
});

export const InputNewCard = styled("textarea", {
  all: "unset",
  width: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",

  fontSize: 13,
  lineHeight: 1,

  color: "$neutralBlack",

  border: "1px solid $violet100",

  backgroundColor: "$gray600",
  boxShadow: `0 0 0 1px $neutralBlack`,
  "&:focus": { boxShadow: `0 0 0 2px black` },
});
