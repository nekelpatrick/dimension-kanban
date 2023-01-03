import { Button } from "../../styles/Button";
import { useState } from "react";

import {
  AvatarArea,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  SwitchButton,
  ToolbarRoot,
  ToolbarToggleGroup,
} from "./styles";

import { BiLink } from "react-icons/bi";

import { Cloud, List, SquaresFour, Headphones, Link } from "phosphor-react";

export const ToolbarComponent = () => {
  const [isList, setIsList] = useState(true);

  function toggleIsList() {
    setIsList(!isList);
  }

  return (
    <ToolbarRoot>
      <ToolbarToggleGroup
        style={{ margin: "0 0 0 24px" }}
        type="multiple"
        aria-label="Text formatting"
      >
        <Button type="primary">
          <span>
            <Cloud color="#58B2CB" weight="fill" /> 25&#37;
          </span>
        </Button>
        <Button type="primary">Filter</Button>
      </ToolbarToggleGroup>

      <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
        <AvatarArea>
          <AvatarRoot>
            <AvatarImage
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <AvatarFallback delayMs={600}>CT</AvatarFallback>
          </AvatarRoot>
          <AvatarRoot>
            <AvatarImage
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <AvatarFallback delayMs={600}>CT</AvatarFallback>
          </AvatarRoot>
        </AvatarArea>

        {/*  */}
        {isList ? (
          <SwitchButton onClick={toggleIsList}>
            <span
              style={{
                margin: "0",
                padding: "0",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "22px",
                height: "20px",
                backgroundColor: "#DFE1E4",
                borderRadius: "5px",
              }}
            >
              <List />
            </span>
            <span style={{ color: "#DFE1E4", margin: "0 6px 0 6px" }}>|</span>
            <SquaresFour size={12} weight="fill" />
          </SwitchButton>
        ) : (
          <SwitchButton onClick={toggleIsList}>
            <List />
            <span style={{ color: "#DFE1E4", margin: "0 6px 0 6px" }}>|</span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "22px",
                height: "20px",
                backgroundColor: "#DFE1E4",
                borderRadius: "5px",
              }}
            >
              <SquaresFour size={12} weight="fill" />
            </span>
          </SwitchButton>
        )}
        {/*  */}
        <Button type="primary">
          <Headphones weight="bold" />
        </Button>
        <Button type="primary">
          <BiLink style={{ margin: "0 " }} />
          <span
            style={{ margin: "0", paddingLeft: "6.46px", fontSize: "12px" }}
          >
            Share
          </span>
        </Button>
      </ToolbarToggleGroup>
    </ToolbarRoot>
  );
};
