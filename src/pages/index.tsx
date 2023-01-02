import { ToolbarComponent } from "../components/Toolbar";
import {
  AddNewCard,
  AddTaskButton,
  BoardCardsArea,
  BoardColumn,
  HomeContainer,
  ColumnArea,
} from "../styles/pages/home";

import { CardComponent } from "../components/Card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import BoardData from "../utils/board-data.json";
import { useEffect, useState } from "react";

function createGuidId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

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

interface Item {
  // add properties for the item object here
}

interface Re {
  source: {
    droppableId: string;
    index: number;
  };
  destination?: {
    droppableId: string;
    index: number;
  };
}

export function Home() {
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   if (process) {
  //     setReady(true);
  //   }
  // }, []);

  // const onDragEnd = (re: any) => {
  //   if (!re.destination) return;
  //   let newBoardData = boardData;
  //   let dragItem =
  //     newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
  //   newBoardData[parseInt(re.source.droppableId)].items.splice(
  //     re.source.index,
  //     1
  //   );
  //   newBoardData[parseInt(re.destination.droppableId)].items.splice(
  //     re.destination.index,
  //     0,
  //     dragItem
  //   );
  //   setBoardData(newBoardData);
  // };

  const onDragEnd = (re: Re) => {
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
    console.log(dragItem);

    // remove the item from the source location
    currentBoardData[sourceIdNum].items.splice(sourceIndex, 1);

    // insert the item into the destination location
    currentBoardData[destinationIdNum].items.splice(
      destinationIndex,
      0,
      dragItem
    );

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
          id: Number(createGuidId()),
          title: val,
          description: val,
          embedImage: val,
          tag: val,
          assignees: [],
          chat: 0,
          attachment: 0,
          checkMarkCurrent: "",
          checkMarkGoal: "",
          date: val,
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

  // return (
  //   <HomeContainer>
  //     <ToolbarComponent />
  //     {ready && (
  //       <DragDropContext onDragEnd={onDragEnd}>
  //         <ColumnArea className="grid grid-cols-4 gap-5 my-5">
  //           {boardData.map((board, bIndex) => (
  //             <Droppable key={board.name} droppableId={bIndex.toString()}>
  //               {(provided, snapshot) => (
  //                 <BoardColumn
  //                   {...provided.droppableProps}
  //                   ref={provided.innerRef}
  //                   className={`bg-gradient-to-r from-pink-700 to-red-200 absolute inset-x-0 top-0 ${
  //                     snapshot.isDraggingOver && "isDraggingOver"
  //                   }`}
  //                 >
  //                   <h4 className="p-3 flex justify-between items-center mb-2">
  //                     <span className="text-2xl text-gray-600">
  //                       {board.name}
  //                     </span>
  //                   </h4>
  //                   <BoardCardsArea>
  //                     {board.items.length > 0 &&
  //                       board.items.map((item, iIndex) => (
  //                         <CardComponent
  //                           key={item.id}
  //                           data={item}
  //                           index={iIndex}
  //                           className="m-3"
  //                         />
  //                       ))}
  //                     {provided.placeholder}
  //                   </BoardCardsArea>
  //                   {showForm && selectedBoard === bIndex ? (
  //                     <AddNewCard className="p-3">
  //                       <textarea
  //                         className="border-gray-300 rounded focus:ring-purple-400 w-full"
  //                         rows={3}
  //                         placeholder="Task info"
  //                         data-id={bIndex}
  //                         onKeyDown={onTextAreaKeyPress}
  //                       />
  //                     </AddNewCard>
  //                   ) : (
  //                     <AddTaskButton
  //                       className="flex justify-center items-center my-3 space-x-2 text-lg"
  //                       onClick={() => {
  //                         setSelectedBoard(bIndex);
  //                         setShowForm(true);
  //                       }}
  //                     >
  //                       <span>Add task</span>
  //                     </AddTaskButton>
  //                   )}
  //                 </BoardColumn>
  //               )}
  //             </Droppable>
  //           ))}
  //         </ColumnArea>
  //       </DragDropContext>
  //     )}
  //   </HomeContainer>
  // );

  return (
    <HomeContainer>
      <ToolbarComponent />
      <DragDropContext onDragEnd={onDragEnd}>
        <ColumnArea className="grid grid-cols-4 gap-5 my-5">
          {boardData.map((board, bIndex) => (
            <Droppable key={board.name} droppableId={bIndex.toString()}>
              {(provided, snapshot) => (
                <BoardColumn
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`bg-gradient-to-r from-pink-700 to-red-200 absolute inset-x-0 top-0 ${
                    snapshot.isDraggingOver && "isDraggingOver"
                  }`}
                >
                  <h4 className="p-3 flex justify-between items-center mb-2">
                    <span className="text-2xl text-gray-600">{board.name}</span>
                  </h4>
                  <BoardCardsArea>
                    {board.items.length > 0 &&
                      board.items.map((item, iIndex) => (
                        <CardComponent
                          key={item.id}
                          data={item}
                          index={iIndex}
                          className="m-3"
                        />
                      ))}
                    {provided.placeholder}
                  </BoardCardsArea>
                  {showForm && selectedBoard === bIndex ? (
                    <AddNewCard className="p-3">
                      <textarea
                        className="border-gray-300 rounded focus:ring-purple-400 w-full"
                        rows={3}
                        placeholder="Task info"
                        data-id={bIndex}
                        onKeyDown={onTextAreaKeyPress}
                      />
                    </AddNewCard>
                  ) : (
                    <AddTaskButton
                      className="flex justify-center items-center my-3 space-x-2 text-lg"
                      onClick={() => {
                        setSelectedBoard(bIndex);
                        setShowForm(true);
                      }}
                    >
                      <span>Add task</span>
                    </AddTaskButton>
                  )}
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
