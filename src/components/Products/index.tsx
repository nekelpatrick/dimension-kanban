import { useState } from "react";
import { Container, Flex } from "../../styles/Global";
import { Button } from "../../styles/Button";

import Image from "next/image";

import { DashBar, NavbarLinks } from "./styles";

import { GrAdd } from "react-icons/gr";

export const Products = (): JSX.Element => {
  return (
    <DashBar>
      <Container>
        <Flex>
          <NavLinks />
        </Flex>
      </Container>
    </DashBar>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Button type="secondary">
        {" "}
        <Image
          src={"/images/1-vector.png"}
          width={24}
          height={24}
          alt=""
          style={{ padding: "10px", borderTop: "1px solid $gray550" }}
        ></Image>{" "}
      </Button>
      <Button type="secondary">
        {" "}
        <Image
          src={"/images/2-dribbble.png"}
          width={24}
          height={24}
          alt=""
        ></Image>{" "}
      </Button>
      <Button type="secondary">
        {" "}
        <Image
          src={"/images/3-buymeacoffee.png"}
          width={24}
          height={24}
          alt=""
        ></Image>{" "}
      </Button>

      <Button className="activ" type="secondary">
        {" "}
        <Image
          src={"/images/4-atlassian.png"}
          width={24}
          height={24}
          alt=""
        ></Image>{" "}
      </Button>
      <Button type="secondary">
        {" "}
        <GrAdd />
      </Button>
    </NavbarLinks>
  );
};
