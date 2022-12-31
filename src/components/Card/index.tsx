import { Draggable } from "react-beautiful-dnd";

import { AvatarRoot, Card, CardFooter, ProductCode } from "./styles";

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
          <ProductCode>FLYTE</ProductCode>
          <h5>{data.title}</h5>
          {data.description}
          <label>{data.tag}</label>
          <CardFooter>
            {data.chat ? (
              <>
                <BsChatDots />
                <span>{data.chat} </span>
              </>
            ) : null}

            {data.checkMarkCurrent ? (
              <>
                <BsCheckCircle />
                <span>
                  {data.checkMarkCurrent}/{data.checkMarkGoal}
                </span>
              </>
            ) : null}
            {data.attachment ? (
              <>
                <BsLink />
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
