import { Button } from "../../styles/Button";

import Image from "next/image";

import { Navbar, LogoMark, NavbarLinksArea, InputArea, Input } from "./styles";

import React from "react";
import { MagnifyingGlass, Notebook } from "phosphor-react";

export const NavBar = (): JSX.Element => {
  return (
    <Navbar>
      <NavbarLinksArea>
        <LogoMark>
          <Image width={23} height={31} src="/static/logoMark.svg" alt="" />
        </LogoMark>
        <NavbarLinksArea>
          <Button type="navigationLinkCurrent">Projects</Button>
          <span
            style={{
              color: "#6C6F75",
              height: "16px",
              margin: "0 4.63px 3px 4.82px",
            }}
          >
            &gt;
          </span>
          <Button type="navigationLink">Cloud Platform</Button>
          <Button type="tag">FLYTE</Button>
        </NavbarLinksArea>
      </NavbarLinksArea>
      <NavbarLinksArea>
        <InputArea>
          <Image
            width={16}
            height={16}
            src="/static/navbar/searchIcon.svg"
            alt=""
            style={{ marginRight: "8px" }}
          />
          <Input type="text" id="search" placeholder="Search" />
        </InputArea>
        <Button type="sideButton">
          <Image
            width={16}
            height={16}
            src="/static/navbar/notebookIcon.svg"
            alt=""
          />
        </Button>
      </NavbarLinksArea>
    </Navbar>
  );
};
