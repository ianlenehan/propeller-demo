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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const segmentCount = zoomLevel * 2;

  const handleZoomChange = (e, newValue) => {
    setZoomLevel(newValue);
    const newPos = tileWidth * (newValue - 1) * -1;
    setPosition({ top: newPos, left: newPos });
  };

  const handleTopChange = (e, newValue) => {
    if (zoomLevel <= 1) return null;
    const newPos = newValue * -1;
    setPosition({ top: newPos, left: position.left });
  };

  const handleLeftChange = (e, newValue) => {
    if (zoomLevel <= 1) return null;
    const newPos = newValue * -1;
    setPosition({ top: position.top, left: newPos });
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
        <MapContainer>
          <MapInner style={{ top: position.top, left: position.left }}>
            {getImages()}
          </MapInner>
        </MapContainer>
      </Fade>
      <ZoomBox>
        <span>Slide to Zoom</span>

        <Slider
          style={{ width: 100 }}
          value={zoomLevel}
          onChange={handleZoomChange}
          min={1}
          max={3}
          aria-labelledby="continuous-slider"
        />
      </ZoomBox>
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
          value={position.left * -1}
          onChange={handleLeftChange}
          disabled={zoomLevel === 1}
          min={0}
          max={zoomLevel * tileWidth}
          aria-labelledby="continuous-slider"
        />
      </PanBox>
    </Layout>
  );
}

export default Map;
