import {
  AreaToggle,
  ButtonToggle,
  ButtonToggleAdd,
  DashBar,
  LinksArea,
  SeparatorComponent,
} from "./styles";

import Image from "next/image";

import { Plus } from "phosphor-react";

export const Sidebar = (): JSX.Element => {
  return (
    <DashBar>
      <SeparatorComponent />
      <LinksArea>
        <AreaToggle>
          <ButtonToggle>
            <Image
              src="/static/products/vector.svg"
              width={24}
              height={24}
              alt=""
            />
          </ButtonToggle>
        </AreaToggle>
        <ButtonToggle>
          <Image
            src="/static/products/dribbble.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>
        <ButtonToggle>
          <Image
            src="/static/products/buymeacoffee.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>

        <ButtonToggle>
          <Image
            src="/static/products/atlassian.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>

        <ButtonToggleAdd>
          <Plus color="#533BE5" weight="bold" size={18} />
        </ButtonToggleAdd>
      </LinksArea>
    </DashBar>
  );
};
