import styled from "styled-components";

export const MapContainer = styled.div`
  flex-grow: 5;
  display: flex;
  width: 512px;
  height: 512px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  border: 3px solid #020101;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const MapInner = styled.div`
  display: flex;
  position: absolute;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  border: 2px solid #020101;
  background-color: #fd0;
  padding: 10px;
`;

export const ZoomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const PanBox = styled(Box)`
  width: 130px;
  margin-left: 20px;

  article {
    margin-bottom: 5px;
    text-align: center;
  }
`;

export const Header = styled.h1`
  text-align: center;
`;

export const Img = styled.img`
  width: 500px;
  border-radius: 5px;
  border: 3px solid #020101;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;
