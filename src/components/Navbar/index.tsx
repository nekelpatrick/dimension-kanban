import { Button } from "../../styles/Button";

import Image from "next/image";

import { Navbar, LogoMark, NavbarLinks } from "./styles";

export const NavBar = (): JSX.Element => {
  return (
    <Navbar>
      <NavbarLinks>
        <LogoMark>
          <Image width={23} height={31} src={"/images/logoMark.png"} alt="" />
        </LogoMark>
        <a href="">Projects</a> <span>&gt;</span>
        <a href="">Cloud Platform</a>
        <span>FLYTE</span>
      </NavbarLinks>
      <NavbarLinks>
        <input type="text" defaultValue="Search" />
        <Button type="primary">.</Button>
      </NavbarLinks>
    </Navbar>
  );
};
