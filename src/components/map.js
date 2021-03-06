import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Fade from "react-reveal/Fade";
import Layout from "./layout";
import {
  MapContainer,
  MapInner,
  Column,
  ZoomBox,
  PanBox,
  Header
} from "./styles";

const mapImages = require.context("../images/tiled");
const tileWidth = 256;

function Map() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const segmentCount = zoomLevel * 2;

  const handleZoomChange = (e, newValue) => {
    setZoomLevel(newValue);
    const newPos = tileWidth * (newValue - 1) * -1;
    setPosition({ top: newPos, right: newPos });
  };

  const handleTopChange = (e, newValue) => {
    if (zoomLevel <= 1) return null;
    const newPos = newValue * -1;
    setPosition({ top: newPos, right: position.right });
  };

  const handleRightChange = (e, newValue) => {
    if (zoomLevel <= 1) return null;
    const newPos = newValue * -1;
    setPosition({ top: position.top, right: newPos });
  };

  const getImages = () => {
    let images = [];

    for (let i = 0; i < segmentCount; i++) {
      let columnImages = [];
      for (let j = 0; j < segmentCount; j++) {
        let imagePath = `./${zoomLevel}/${i}/${j}.jpg`;
        let src = mapImages(imagePath);
        let id = `${zoomLevel}-${i}-${j}`;
        columnImages.push(<img key={id} src={src} alt={id} />);
      }
      images.push(<Column key={`column-${i}`}>{columnImages}</Column>);
    }
    return images;
  };

  return (
    <Layout>
      <Header>Tiled Image</Header>
      <Fade duration={2000}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 130, marginRight: 30 }} />
          <MapContainer>
            <MapInner style={{ top: position.top, right: position.right }}>
              {getImages()}
            </MapInner>
          </MapContainer>
          <PanBox>
            <article>Pan Controls</article>
            <Slider
              style={{ height: 100, marginBottom: 20 }}
              orientation="vertical"
              value={position.top * -1}
              onChange={handleTopChange}
              disabled={zoomLevel === 1}
              min={0}
              max={zoomLevel * tileWidth}
              aria-labelledby="continuous-slider"
            />

            <Slider
              style={{ width: 100 }}
              value={position.right * -1}
              onChange={handleRightChange}
              disabled={zoomLevel === 1}
              min={0}
              max={zoomLevel * tileWidth}
              aria-labelledby="continuous-slider"
            />
          </PanBox>
        </div>
      </Fade>
      <ZoomBox>
        <article>Slide to Zoom</article>

        <Slider
          style={{ width: 100 }}
          value={zoomLevel}
          onChange={handleZoomChange}
          min={1}
          max={3}
          aria-labelledby="continuous-slider"
        />
      </ZoomBox>
    </Layout>
  );
}

export default Map;
