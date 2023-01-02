import { Draggable } from "react-beautiful-dnd";

import {
  AvatarArea,
  AvatarImage,
  AvatarRoot,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTag,
  CardTagText,
  FooterIconsArea,
  ProductCode,
  TagAssign,
  AvatarFallback,
  TitleAvatarExcessCount,
} from "./styles";

import Image from "next/image";

export const CardComponent = ({ data, index }: any) => {
  const firstThreeAvatars = data.assignees.slice(0, 3);

  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    background: isDragging ? "#F4F4F4" : "#FFFFFF",
    transform: "rotate(3deg)",
    zIndex: 999,
    boxShadow: "0 0 0 2px black,",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided: any, snapshot: any) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {/* Card Content */}
          <CardContent>
            <ProductCode>FLYTE-{data.id}</ProductCode>
            <h5 style={{ margin: "0 0 6px 0" }}>{data.title}</h5>

            {data.embedImage ? (
              <Image src={data.embedImage} width={212} height={88} alt="" />
            ) : null}

            <CardDescription>{data.description}</CardDescription>
            <TagAssign
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {data.tag.toLocaleLowerCase() == "research" ? (
                <CardTag color="violet">
                  <CardTagText>{data.tag}</CardTagText>
                </CardTag>
              ) : null}
              {data.tag.toLocaleLowerCase() == "ui design" ? (
                <CardTag color="blue">
                  <CardTagText>{data.tag}</CardTagText>
                </CardTag>
              ) : null}
              {data.tag.toLocaleLowerCase() == "planning" ? (
                <CardTag color="green">
                  <CardTagText>{data.tag}</CardTagText>
                </CardTag>
              ) : null}

              {/* Avatar Area */}
              <AvatarArea>
                {data.assignees.length < 3
                  ? data.assignees.map((asst: any, index: any) => {
                      return (
                        <AvatarRoot key={index}>
                          <AvatarImage src={asst.avt} alt="" />
                          <AvatarFallback delayMs={600}></AvatarFallback>
                        </AvatarRoot>
                      );
                    })
                  : firstThreeAvatars.map((asst: any, index: any) => {
                      return (
                        <AvatarRoot key={index}>
                          <AvatarImage src={asst.avt} alt="" />
                          <AvatarFallback delayMs={600}></AvatarFallback>
                        </AvatarRoot>
                      );
                    })}

                {data.assignees.length > 3 ? (
                  <AvatarRoot exceeded="exceedCount" key={index}>
                    <TitleAvatarExcessCount>
                      {data.assignees.length - 3}{" "}
                      <span
                        style={{
                          marginBottom: "2px",
                        }}
                      >
                        +
                      </span>
                    </TitleAvatarExcessCount>

                    <AvatarFallback delayMs={600}></AvatarFallback>
                  </AvatarRoot>
                ) : null}
              </AvatarArea>

              {/* data.assignees.map((asst: any, index: any) => {
                  return (
                    <AvatarRoot key={index}>
                      <AvatarImage src={asst.avt} alt="" />
                      <AvatarFallback delayMs={600}></AvatarFallback>
                    </AvatarRoot>
                  );
                }) */}

              {/* Avatar Area */}
            </TagAssign>
          </CardContent>

          {/* CardFooter */}
          <CardFooter>
            <FooterIconsArea>
              {data.chat ? (
                <span>
                  <Image
                    src={"/static/cards/chatIcon.svg"}
                    height={16}
                    width={16}
                    alt=""
                    style={{ marginRight: "4px" }}
                  />
                  <span>{data.chat} </span>
                </span>
              ) : null}
              {data.checkMarkCurrent ? (
                <span>
                  <Image
                    src={"/static/cards/checkMarkIcon.svg"}
                    height={16}
                    width={16}
                    alt=""
                    style={{ marginRight: "4px" }}
                  />
                  <span>
                    {data.checkMarkCurrent}/{data.checkMarkGoal}
                  </span>
                </span>
              ) : null}
              {data.attachment ? (
                <span>
                  <Image
                    src={"/static/cards/linkIcon.svg"}
                    height={16}
                    width={16}
                    alt=""
                    style={{ marginRight: "4px" }}
                  />
                  <span>{data.attachment} </span>
                </span>
              ) : null}
            </FooterIconsArea>
            <span
              style={{
                margin: "12px 16px 12px 0",
              }}
            >
              {data.done ? (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/static/cards/checkMarkDone.svg"
                    height={16}
                    width={16}
                    alt=""
                    style={{ marginRight: "4px" }}
                  />
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "12px",
                      lineHeight: "16px",
                      letterSpacing: "0.2px",
                      color: "#78c552",
                    }}
                  >
                    Done
                  </p>
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/static/cards/calendarIcon.svg"
                    height={16}
                    width={16}
                    alt=""
                    style={{ marginRight: "4px" }}
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "12px",
                      lineHeight: "16px",
                      letterSpacing: "0.2px",
                      color: "#98A5B3",
                    }}
                  >
                    {data.date}
                  </p>
                </span>
              )}
            </span>
          </CardFooter>
        </Card>
      )}
    </Draggable>
  );
};
