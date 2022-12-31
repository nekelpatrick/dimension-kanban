import * as Toolbar from "@radix-ui/react-toolbar";
import { Button } from "../../styles/Button";

import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  ToolbarRoot,
  ToolbarToggleGroup,
} from "./styles";

export const ToolbarComponent = () => {
  return (
    <ToolbarRoot>
      <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
        <Button type="primary">25%</Button>
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

        <Button type="primary">Icon</Button>
        <Button type="primary">Headset</Button>
        <Button type="primary">Share</Button>
      </ToolbarToggleGroup>

      <Toolbar.Separator />
    </ToolbarRoot>
  );
};
