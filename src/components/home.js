import React from "react";
import Fade from "react-reveal/Fade";
import Layout from "./layout";
import untiled from "../images/un-tiled.jpg";
import { Header, Img } from "./styles";

function Home() {
  return (
    <Layout>
      <Fade duration={2000}>
        <Header>Untiled Image</Header>
        <Img src={untiled} slt="un-tiled" />
      </Fade>
    </Layout>
  );
}

export default Home;
