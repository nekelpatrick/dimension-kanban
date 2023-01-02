import { DashBar, LinksArea, SeparatorComponent } from "./styles";

import { ButtonToggle, ButtonToggleAdd } from "../../styles/Button";
import Image from "next/image";

import { Plus } from "phosphor-react";

export const Sidebar = (): JSX.Element => {
  return (
    <DashBar>
      <SeparatorComponent />
      <LinksArea>
        <ButtonToggle>
          <Image
            src="/images/products/vector.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>
        <ButtonToggle>
          <Image
            src="/images/products/dribbble.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>
        <ButtonToggle>
          <Image
            src="/images/products/buymeacoffee.svg"
            width={24}
            height={24}
            alt=""
          />
        </ButtonToggle>

        <ButtonToggle>
          <Image
            src="/images/products/atlassian.svg"
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
