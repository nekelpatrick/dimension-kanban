import { Draggable } from "react-beautiful-dnd";

import {
  AvatarArea,
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
} from "./styles";

import Image from "next/image";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const CardComponent = ({ data, index }: any) => {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided: any) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* Card Content */}
          <CardContent>
            <ProductCode>FLYTE-{data.id}</ProductCode>
            <h5 style={{ margin: "0 0 6px 0" }}>{data.title}</h5>
            <CardDescription>{data.description}</CardDescription>
            <TagAssign
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {" "}
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
              {data.assignees.map((asst: any, index: any) => {
                return (
                  <AvatarArea key={index}>
                    <AvatarRoot>
                      <AvatarPrimitive.AvatarImage src={asst.avt} alt="" />
                      <AvatarPrimitive.AvatarFallback
                        delayMs={600}
                      ></AvatarPrimitive.AvatarFallback>
                    </AvatarRoot>
                  </AvatarArea>
                );
              })}
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
