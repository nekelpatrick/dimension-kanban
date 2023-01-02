import { styled } from "..";

export const HomeContainer = styled("main", {
  position: "absolute",
  top: "54px",
  left: "56px",
  right: "0",
  bottom: "0",
  marginTop: "24px",
  marginLeft: "24px",
  // width: "100%",
});

export const ColumnArea = styled("div", {
  display: "flex",
  height: "700px",
});

export const BoardCardsArea = styled("div", {
  overflowY: "auto",
  overflowX: "hidden",
  height: "600px",
  maxHeight: "calc(100vh - 290px)",
});

export const BoardColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  maxWidth: "244px",

  backgroundColor: "$gray-100",
  borderRadius: "$md",
  boxShadow: "$md",
  position: "relative",
  overflow: "hidden",
  height: "600px",
  margin: "0 30px 0 24px",

  "&.isDraggingOver": {
    backgroundColor: "$green-100",
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
  paddingBottom: "1rem",
  flexDirection: "column",
  maxWidth: "244px",
});

export const ColumnHeaderTitle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "244px",
});
