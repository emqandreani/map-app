import { Box, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useRef } from "react";

import "leaflet/dist/leaflet.css";
import styles from "./styles.module.scss";

export const BS_AS_POSITION: LatLngExpression = [-34.603722, -58.381592];

// Coordinates for the route between Palermo and San Isidro
const routeCoordinates: LatLngExpression[] = [
  [-34.615852, -58.435348], // Palermo
  [-34.525852, -58.495348], // San Isidro
];

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
      <div className={styles.titleWrapper}>
        <Typography variant="h1">Map App</Typography>
      </div>
      <div className={styles.mapWrapper} id="map">
        <MapContainer
          ref={map}
          center={BS_AS_POSITION}
          className={styles.mapContainer}
          fadeAnimation={true}
          scrollWheelZoom={true}
          zoom={10}
          zoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={tileUrl}
          />

          {/* Route (Polyline) between Palermo and San Isidro */}
          <Polyline pathOptions={{ color: "blue" }} positions={routeCoordinates} />
        </MapContainer>
      </div>
    </div>
  );
}
