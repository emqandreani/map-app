import { Box, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useRef } from "react";

import "leaflet/dist/leaflet.css";
import styles from "./styles.module.scss";

export const BS_AS_POSITION: LatLngExpression = [-34.603722, -58.381592];

export default function Home() {
  const map = useRef<L.Map>(null);
  const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

  useEffect(() => {
    if (!map?.current) return;

    map.current.setMaxZoom(18);
    map.current.setMinZoom(8);
  }, [map]);

  return (
    <div className={styles.root}>
      <div>
        <Typography variant="h1">Map App</Typography>
        <Typography>Map App</Typography>
      </div>
      <div className={styles.mapWrapper} id="map">
        <MapContainer
          ref={map}
          center={BS_AS_POSITION}
          className={styles.mapContainer}
          fadeAnimation={true}
          scrollWheelZoom={true}
          zoom={6}
          zoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={tileUrl}
          />
          {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
        </MapContainer>
      </div>
    </div>
  );
}
