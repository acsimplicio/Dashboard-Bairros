import React from "react";

export const DashboardContext = React.createContext();

export const DashboardStorage = ({ children }) => {
  const [neighborhood, setNeighborhood] = React.useState("");
  const [populationData, setPopulationData] = React.useState(null);
  const [geoData, setGeoData] = React.useState(null);

  const fetchGeoData = async () => {
    const response = await fetch("../../public/data/geometrias_bairros.json");
    const data = await response.json();
    setGeoData(data);
  };

  const fetchPopulationData = async () => {
    const response = await fetch("../../public/data/populacao_bairros.json");
    const data = await response.json();
    setPopulationData(data);
  };

  React.useEffect(() => {
    fetchGeoData();
    fetchPopulationData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{ neighborhood, setNeighborhood, populationData, geoData }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
