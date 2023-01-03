import {
  AreaToggle,
  ButtonToggle,
  ButtonToggleActive,
  ButtonToggleAdd,
  DashBar,
  LinksArea,
  SeparatorComponent,
} from "./styles";

import Image from "next/image";

import { Plus } from "phosphor-react";
import { useState } from "react";

export const Sidebar = (): JSX.Element => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <DashBar>
      <SeparatorComponent />
      <LinksArea>
        {/* <AreaToggle> */}
        <ButtonToggleActive style={{}} data-active={buttonActive}>
          <Image
            src="/static/products/vector.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggleActive>
        {/* </AreaToggle> */}
        <ButtonToggle data-active={buttonActive}>
          <Image
            src="/static/products/dribbble.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>
        <ButtonToggle data-active={buttonActive}>
          <Image
            src="/static/products/buymeacoffee.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>

        <ButtonToggle data-active={buttonActive}>
          <Image
            src="/static/products/atlassian.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>

        <ButtonToggleAdd data-active={buttonActive}>
          <Plus color="#533BE5" weight="bold" size={18} />
        </ButtonToggleAdd>
      </LinksArea>
    </DashBar>
  );
};
