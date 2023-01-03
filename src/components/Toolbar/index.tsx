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
import Image from "next/image";

// import { BiLink } from "react-icons/bi";

export const ToolbarComponent = () => {
  const [isList, setIsList] = useState(true);

  function toggleIsList() {
    setIsList(!isList);
  }

  return (
    <ToolbarRoot>
      <ToolbarToggleGroup
        style={{ margin: "0 0 0 24px" }}
        aria-label="Text formatting"
      >
        <Button type="primary">
          <Image
            width={18}
            height={18}
            src="/static/toolbar/cloudIcon.svg"
            alt=""
          />
          <span style={{ marginLeft: "7.75px" }}>25&#37;</span>
        </Button>
        <Button type="primary">Filter</Button>
      </ToolbarToggleGroup>

      <ToolbarToggleGroup aria-label="Text formatting">
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
              <Image
                width={14}
                height={14}
                src="/static/toolbar/listIcon.svg"
                alt=""
              />
            </span>
            <span style={{ color: "#DFE1E4", margin: "0 6px 0 6px" }}>|</span>
            <Image
              width={12}
              height={12}
              src="/static/toolbar/squareFourIcon.svg"
              alt=""
            />
          </SwitchButton>
        ) : (
          <SwitchButton onClick={toggleIsList}>
            <Image
              width={14}
              height={14}
              src="/static/toolbar/listIcon.svg"
              alt=""
            />
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
              <Image
                width={12}
                height={12}
                src="/static/toolbar/squareFourIcon.svg"
                alt=""
              />
            </span>
          </SwitchButton>
        )}
        {/*  */}
        <Button type="primary">
          <Image
            width={14}
            height={14}
            src="/static/toolbar/headphonesIcon.svg"
            alt=""
          />
        </Button>
        <Button type="primary">
          <Image
            width={12}
            height={12}
            src="/static/toolbar/linkIcon.svg"
            alt=""
          />
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
