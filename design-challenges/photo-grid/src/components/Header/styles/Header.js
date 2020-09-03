import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin: 1rem auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  color: #66bfbf;
`;

export const SubLogo = styled.p`
  font-size: 1rem;
  color: #8d93ab;
  margin: 1rem;
  display: flex;
  align-items: center;
  font-style: italic;
`;

export const SocialList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: flex-end;
`;

export const Icon = styled.a`
  font-size: 1rem;
  margin: 0 1rem;
  text-decoration: none;
  color: #66bfbf;

  &:hover {
    transition: 100ms ease-in;
    color: #056674;
  }
`;
