import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-width: 500px;
  flex-grow: 1;
  background-color: white;
  padding: 30px;
`;

function Layout({ children }) {
  return (
    <Container>
      <Navigation />
      <Page>{children}</Page>
    </Container>
  );
}

export default Layout;
