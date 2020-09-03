import React from "react";
import {
  HeaderContainer,
  Logo,
  SubLogo,
  SocialList,
  Icon,
  LogoContainer,
} from "./styles/Header";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>GridPic</Logo>
        <SubLogo>PhotoGrids Made Easy</SubLogo>
      </LogoContainer>
      <SocialList>
        <Icon href="#">Facebook</Icon>
        <Icon href="#">Twitter</Icon>
        <Icon href="#">Pinterest</Icon>
      </SocialList>
    </HeaderContainer>
  );
}

export default Header;
