import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: 30px;

  li {
    margin: 20px;
    transition: all ease-in-out 0.25s;
    font-size: 18px;

    a {
      color: #020101;
      text-decoration: none;
      position: relative;
      padding: 5px 0 2px;
      :before {
        display: block;
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 0;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.075);
        content: "";
        background-color: #020101;
      }
      :hover {
        :before {
          width: 100%;
        }
      }
    }
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fd0;
`;

const SiteTitle = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 36px;
  }

  a {
    color: #020101;
    text-decoration: none;
  }
`;

const LogoBox = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const InnerLogoBox = styled.div`
  ${props => props.dark && `background-color: #020101;`}
  flex-basis: 50%;
`;

function Logo() {
  return (
    <LogoBox>
      <InnerLogoBox />
      <InnerLogoBox dark />
      <InnerLogoBox dark />
      <InnerLogoBox />
    </LogoBox>
  );
}

function Navigation() {
  return (
    <NavContainer>
      <SiteTitle>
        <Logo />
        <Link to="/">
          <h2>mapplication</h2>
        </Link>
      </SiteTitle>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/map">Image Map</Link>
        </li>
      </Nav>
    </NavContainer>
  );
}

export default Navigation;
