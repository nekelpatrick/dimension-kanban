import * as Toolbar from "@radix-ui/react-toolbar";
import { Button } from "../../styles/Button";

import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  ToolbarRoot,
  ToolbarToggleGroup,
} from "./styles";

import { Cloud, List, SquaresFour, Headphones, Link } from "phosphor-react";

export const ToolbarComponent = () => {
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

        <Button type="primary">
          <List /> | <SquaresFour />
        </Button>
        <Button type="primary">
          <Headphones />
        </Button>
        <Button type="primary">
          <span>
            <Link /> share
          </span>
        </Button>
      </ToolbarToggleGroup>

      <Toolbar.Separator />
    </ToolbarRoot>
  );
};
