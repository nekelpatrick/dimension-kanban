//@ts-nocheck

import { ToolbarComponent } from "../components/Toolbar";
import {
  AddNewCard,
  AddTaskButton,
  BoardCardsArea,
  BoardColumn,
  HomeContainer,
  ColumnArea,
  ColumnHeader,
  ColumnHeaderTitle,
  InputNewCard,
  PlaceHolder,
} from "../styles/pages/home";

import { resetServerContext } from "react-beautiful-dnd";

import { CardComponent } from "../components/Card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import BoardData from "../utils/board-data.json";
import { useState } from "react";

import { CircleDashed, CircleHalf, CheckCircle, Plus } from "phosphor-react";
import Image from "next/image";
import { AddCardButton, Button } from "../styles/Button";

import { isEmpty } from "lodash";

// import { NonNullable } from "ts-essentials";

interface Item {
  id: number;
  title: string;
  description: string;
  embedImage: string;
  tag: string;
  assignees: { avt: string }[];
  chat: number;
  attachment: number;
  checkMarkCurrent: string;
  checkMarkGoal: string;
  date: string;
  done: boolean;
}

interface IPlaceholderProps {
  clientY?: number;
  clientX?: number;
  clientHeight?: number;
  clientWeight?: number;
  clientWidth?: number;
}

export function Home() {
  resetServerContext();

  const [selectedBoard, setSelectedBoard] = useState(0);
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);

  // queryAttr

  const queryAttr = "data-rbd-drag-handle-draggable-id";
  const destinationQuertAttr = "data-rbd-droppable-id";

  const [placeholderProps, setPlaceholderProps] = useState<IPlaceholderProps>(
    {}
  );

  // Drag functions -----

  const getDraggedDom = (draggableId: any) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);
    return draggedDOM as Element;
  };

  const getDestinationDom = (dropabbleId: any) => {
    const domQuery = `[${destinationQuertAttr}='${dropabbleId}']`;
    const destinationDOm = document.querySelector(domQuery);
    return destinationDOm;
  };

  const handleDragStart = (event: any) => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    if (draggedDOM.parentNode) {
      const { clientHeight, clientWidth } = draggedDOM;
      const sourceIndex = event.source.index;

      var clientY =
        parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
        [...draggedDOM.parentNode.children]
          .slice(0, sourceIndex)
          .reduce((total, curr) => {
            const style = curr.currentStyle || window.getComputedStyle(curr);
            const marginBottom = parseFloat(style.marginBottom);
            return total + curr.clientHeight + marginBottom;
          }, 0);

      setPlaceholderProps({
        clientHeight,
        clientWidth,
        clientY,
        clientX: parseFloat(
          window.getComputedStyle(draggedDOM.parentNode).paddingLeft
        ),
      });
    }
  };

  const handleDragUpdate = (event: any) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    const childrenArray = [...draggedDOM.parentNode.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const droppedDom = getDestinationDom(event.destination.droppableId);
    const destinationChildrenArray = [...droppedDom.children];
    let updatedArray;
    if (draggedDOM.parentNode === droppedDom) {
      updatedArray = [
        ...childrenArray.slice(0, destinationIndex),
        movedItem,
        ...childrenArray.slice(destinationIndex + 1),
      ];
    } else {
      updatedArray = [
        ...destinationChildrenArray.slice(0, destinationIndex),
        movedItem,
        ...destinationChildrenArray.slice(destinationIndex + 1),
      ];
    }

    var clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };

  // ------

  function getNextId(json: any): number {
    // Find the highest id in the json
    let highestId = 0;
    json.forEach((section: any) => {
      section.items.forEach((item: any) => {
        if (item.id > highestId) {
          highestId = item.id;
        }
      });
    });

    // Return the next id (one more than the highest id)
    return highestId + 1;
  }

  const onDragEnd = (re: any) => {
    // check if there is no destination, then return early
    if (!re.destination) return;

    // destructure the source and destination from the re object
    const { droppableId: sourceId, index: sourceIndex } = re.source;
    const { droppableId: destinationId, index: destinationIndex } =
      re.destination;

    // convert the droppableIds to numbers
    const sourceIdNum = parseInt(sourceId, 10);
    const destinationIdNum = parseInt(destinationId, 10);

    // get a reference to the current board data
    const currentBoardData = boardData;

    // get the item being dragged
    const dragItem = currentBoardData[sourceIdNum].items[sourceIndex];

    // remove the item from the source location
    currentBoardData[sourceIdNum].items.splice(sourceIndex, 1);

    // insert the item into the destination location
    currentBoardData[destinationIdNum].items.splice(
      destinationIndex,
      0,
      dragItem
    );

    setPlaceholderProps({});
    // update the board data
    setBoardData(currentBoardData);
  };

  const onTextAreaKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      const val = e.target.value;
      if (val.length === 0) {
        setShowForm(false);
      } else {
        const boardId = e.target.attributes["data-id"].value;
        const item: Item = {
          id: getNextId(boardData),
          title: val,
          description: "Add a description",
          embedImage: "",
          tag: "",
          assignees: [],
          chat: 0,
          attachment: 0,
          checkMarkCurrent: "",
          checkMarkGoal: "",
          date: "",
          done: false,
        };
        let newBoardData = boardData;
        newBoardData[boardId].items.push(item);
        setBoardData(newBoardData);
        setShowForm(false);
        e.target.value = "";
      }
    }
  };

  return (
    <HomeContainer>
      <ToolbarComponent />
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
      >
        <ColumnArea>
          {boardData.map((board, bIndex) => (
            <Droppable key={board.name} droppableId={bIndex.toString()}>
              {(provided, snapshot) => (
                <BoardColumn
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`${snapshot.isDraggingOver && "isDraggingOver"}`}
                >
                  {board.name.toLocaleLowerCase() == "todo" ? (
                    <ColumnHeader>
                      <ColumnHeaderTitle>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "auto",
                            maxWidth: "300px",
                          }}
                        >
                          <CircleDashed
                            size={20}
                            color="#A9B4C0"
                            style={{ marginRight: "8px" }}
                          />
                          <h4 style={{ letterSpacing: "0.2px" }}>
                            {board.name}
                          </h4>

                          <Button
                            style={{
                              width: "28px",
                              height: "20px",
                              margin: "0 0 0 12px ",

                              border: "1px solid #EAEDF0",
                              borderRadius: "8px",

                              backgroundColor: "#F7F9FA",
                              textAlign: "center",

                              fontWeight: "700",
                              fontSize: "12px",
                            }}
                          >
                            {board.items.length}
                          </Button>
                        </div>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "auto",
                            maxWidth: "300px",
                          }}
                        >
                          <Button
                            style={{
                              margin: "0 4px 0 0",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* <Plus size={12} weight="bold" color="#A9B4C0" /> */}
                            <Image
                              src={"/static/columns/plusIcon.svg"}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </Button>
                          <Button
                            style={{
                              margin: "0 4px 0 0",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src={"/static/columns/threeDotsIcon.svg"}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </Button>
                        </span>
                      </ColumnHeaderTitle>
                      <Image
                        style={{ marginTop: "16px" }}
                        src="static/columns/separatorColumn.svg"
                        height={2}
                        width={244}
                        alt=""
                      />
                    </ColumnHeader>
                  ) : null}

                  {board.name.toLocaleLowerCase() == "in progress" ? (
                    <ColumnHeader>
                      <ColumnHeaderTitle>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "auto",
                            maxWidth: "300px",
                          }}
                        >
                          <CircleHalf
                            size={20}
                            weight="fill"
                            color="#2F6BFE"
                            style={{ marginRight: "8px" }}
                          />
                          <h4 style={{ letterSpacing: "0.2px" }}>
                            {board.name}
                          </h4>

                          <Button
                            style={{
                              width: "28px",
                              height: "20px",
                              margin: "0 0 0 12px ",

                              border: "1px solid #EAEDF0",
                              borderRadius: "8px",

                              backgroundColor: "#F7F9FA",
                              textAlign: "center",

                              fontWeight: "700",
                              fontSize: "12px",
                            }}
                          >
                            {board.items.length}
                          </Button>
                        </div>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "auto",
                            maxWidth: "110px",
                          }}
                        >
                          <Button
                            style={{
                              margin: "0 4px 0 0",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* <Plus size={12} weight="bold" color="#A9B4C0" /> */}
                            <Image
                              src={"/static/columns/plusIcon.svg"}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </Button>
                          <Button
                            style={{
                              margin: "0 4px 0 0",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src={"/static/columns/threeDotsIcon.svg"}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </Button>
                        </span>
                      </ColumnHeaderTitle>
                      <Image
                        style={{ marginTop: "16px" }}
                        src="static/columns/separatorColumnBlue.svg"
                        height={2}
                        width={244}
                        alt=""
                      />
                    </ColumnHeader>
                  ) : null}

                  {board.name.toLocaleLowerCase() == "completed" ? (
                    <ColumnHeader>
                      <ColumnHeaderTitle>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "auto",
                            maxWidth: "200px",
                          }}
                        >
                          <CheckCircle
                            size={20}
                            weight="fill"
                            color="#78C552"
                            style={{ marginRight: "8px" }}
                          />
                          <h4 style={{ letterSpacing: "0.2px" }}>
                            {board.name}
                          </h4>

                          <Button
                            style={{
                              width: "28px",
                              height: "20px",
                              margin: "0 0 0 12px ",

                              border: "1px solid #EAEDF0",
                              borderRadius: "8px",

                              backgroundColor: "#F7F9FA",
                              textAlign: "center",

                              fontWeight: "700",
                              fontSize: "12px",
                            }}
                          >
                            {board.items.length}
                          </Button>
                        </div>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "auto",
                            maxWidth: "110px",
                          }}
                        >
                          <Button
                            style={{
                              margin: "0 4px 0 0",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* <Plus size={12} weight="bold" color="#A9B4C0" /> */}
                            <Image
                              src={"/static/columns/plusIcon.svg"}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </Button>
                          <Button
                            style={{
                              margin: "0 4px 0 0",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              src={"/static/columns/threeDotsIcon.svg"}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </Button>
                        </span>
                      </ColumnHeaderTitle>
                      <Image
                        style={{ marginTop: "16px" }}
                        src="static/columns/underlineSeparatorColumnGreen.svg"
                        height={2}
                        width={244}
                        alt=""
                      />
                    </ColumnHeader>
                  ) : null}

                  <BoardCardsArea>
                    {board.items.length > 0 &&
                      board.items.map((item, Index) => (
                        <CardComponent
                          key={item.id}
                          data={item}
                          index={Index}
                          className={`${
                            snapshot.isDraggingOver && "isDraggingOver"
                          }`}
                        />
                      ))}
                    {provided.placeholder}
                  </BoardCardsArea>

                  {showForm && selectedBoard === bIndex ? (
                    <AddNewCard className="p-3">
                      <InputNewCard
                        rows={3}
                        placeholder="Task title"
                        data-id={bIndex}
                        onKeyDown={onTextAreaKeyPress}
                      />
                    </AddNewCard>
                  ) : (
                    <AddCardButton
                      onClick={() => {
                        setSelectedBoard(bIndex);
                        setShowForm(true);
                      }}
                    >
                      <Plus color="#4734FE" size={18} weight="bold" />
                      <span>Add task</span>
                    </AddCardButton>
                  )}
                  {provided.placeholder}
                  {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                    <PlaceHolder
                      className="placeholder"
                      style={{
                        top: placeholderProps.clientY,
                        left: placeholderProps.clientX,
                        height: placeholderProps.clientHeight,
                        width: placeholderProps.clientWidth,
                      }}
                    />
                  )}

                  {/* isEmpty Area */}
                </BoardColumn>
              )}
            </Droppable>
          ))}
        </ColumnArea>
      </DragDropContext>
    </HomeContainer>
  );
}

export default Home;
