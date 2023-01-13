import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { DashboardContext } from "../context/DashboardContext";
import "../styles/MapChart.css";

const MapChart = () => {
  const context = React.useContext(DashboardContext);

  const reversePolygonsXY = (feature) => {
    const reversedPolygons = feature.geometry.coordinates[0].map((polygon) =>
      polygon.map((coords) => [coords[1], coords[0]])
    );
    return reversedPolygons;
  };

  return (
    <div className="map-view">
      <h1 className="map-view__title">
        Bairros | São José dos Campos - Zona Oeste{" "}
      </h1>
      {context.geoData ? (
        <MapContainer
          center={[-23.22, -45.91]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {context.geoData.features.map((feature) => {
            return (
              <Polygon
                pathOptions={{ color: "#04bfb2" }}
                key={feature.properties.id}
                positions={reversePolygonsXY(feature)}
              />
            );
          })}
        </MapContainer>
      ) :
      <p className="map-view__loading">Aguarde...</p>}
    </div>
  );
};

export default MapChart;
