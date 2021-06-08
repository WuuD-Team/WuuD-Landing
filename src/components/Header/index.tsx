import React from "react";
import { Container } from "./styles";
import WuudLogo from "../../assets/Logo.svg";
import Wuud from "../../assets/wuudTeam.svg";

const Header: React.FC = () => {
  return (
    <div>
      <Container>
        <img src={WuudLogo} />
        <img src={Wuud} className={"logo-full"} />
      </Container>
    </div>
  );
};

export default Header;
