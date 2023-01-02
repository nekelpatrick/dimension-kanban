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

import { Cloud, List, SquaresFour, Headphones, Link } from "phosphor-react";

export const ToolbarComponent = () => {
  const [isList, setIsList] = useState(true);

  function toggleIsList() {
    setIsList(!isList);
    console.log(isList);
  }

  return (
    <ToolbarRoot>
      <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
        <Button type="primary">
          <span>
            <Cloud color="#58B2CB" weight="fill" /> 25%
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
            <SquaresFour weight="fill" />
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
              <SquaresFour weight="fill" />
            </span>
          </SwitchButton>
        )}
        {/*  */}
        <Button type="primary">
          <Headphones />
        </Button>
        <Button type="primary">
          <span>
            <Link /> Share
          </span>
        </Button>
      </ToolbarToggleGroup>
    </ToolbarRoot>
  );
};
