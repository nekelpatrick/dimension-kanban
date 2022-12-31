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

export function Home() {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

  const onDragEnd = (re: any) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  const onTextAreaKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      const val = e.target.value;
      if (val.length === 0) {
        setShowForm(false);
      } else {
        const boardId = e.target.attributes["data-id"].value;
        const item = {
          id: Number(createGuidId()),
          title: val,
          description: val,
          embedImage: val,
          tag: val,
          assignees: [],
          chat: 0,
          attachment: 0,
          checkMarkCurrent: 0,
          checkMarkGoal: 0,
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

  return (
    <HomeContainer>
      <ToolbarComponent />
      {ready && (
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
                      <span className="text-2xl text-gray-600">
                        {board.name}
                      </span>
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
      )}
    </HomeContainer>
  );
}

export default Home;
