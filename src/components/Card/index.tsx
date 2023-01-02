import { Draggable } from "react-beautiful-dnd";

import {
  AvatarRoot,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTag,
  CardTagText,
  ProductCode,
} from "./styles";

import Image from "next/image";
import { BsChatDots, BsLink, BsCheckCircle } from "react-icons/bs";

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
          <ProductCode>FLYTE-{data.id}</ProductCode>

          {/* Card Content */}
          <CardContent>
            <h5>{data.title}</h5>
            <CardDescription>{data.description}</CardDescription>

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
          </CardContent>

          {/* CardFooter */}
          <CardFooter>
            {data.chat ? (
              <>
                <Image
                  src={"/static/cards/chatIcon.svg"}
                  height={16}
                  width={16}
                  alt=""
                />
                <span>{data.chat} </span>
              </>
            ) : null}

            {data.checkMarkCurrent ? (
              <>
                <Image
                  src={"/static/cards/checkMarkIcon.svg"}
                  height={16}
                  width={16}
                  alt=""
                />
                <span>
                  {data.checkMarkCurrent}/{data.checkMarkGoal}
                </span>
              </>
            ) : null}
            {data.attachment ? (
              <>
                <Image
                  src={"/static/cards/linkIcon.svg"}
                  height={16}
                  width={16}
                  alt=""
                />
                <span>{data.attachment} </span>
              </>
            ) : null}

            <ul>
              {data.assignees.map((asst: any, index: any) => {
                return (
                  <li
                    style={{ margin: 0, padding: 0, listStyle: "none" }}
                    key={index}
                  >
                    <AvatarRoot>
                      <AvatarPrimitive.AvatarImage src={asst.avt} alt="" />
                      <AvatarPrimitive.AvatarFallback
                        delayMs={600}
                      ></AvatarPrimitive.AvatarFallback>
                    </AvatarRoot>
                  </li>
                );
              })}
            </ul>
          </CardFooter>
        </Card>
      )}
    </Draggable>
  );
};
