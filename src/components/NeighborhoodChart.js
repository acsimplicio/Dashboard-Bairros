import React from "react";
import Select from "./Select";
import { DashboardContext } from "../context/DashboardContext";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import "../styles/NeighborhoodChart.css";

const DataView = () => {
  const context = React.useContext(DashboardContext);
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    if (context.populationData) {
      const filteredData = context.populationData.filter(
        (data) => data.id_geometria === Number(context.neighborhood)
      );
      setData(filteredData);
    }
  }, [context.neighborhood]);

  return (
    <div className="neighborhood-view">
      <h1 className="neighborhood-view__title">
        Evolução Populacional de 2000 a 2006 {name && `- ${name}`}
      </h1>
      <Select setName={setName} />
      {!context.neighborhood ? (
        <p className="neighborhood-view__warning">
          Escolha um bairro no seletor acima.
        </p>
      ) : (
        <BarChart
          className="neighborhood-view__chart"
          width={800}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="populacao" fill="#63be62" />
        </BarChart>
      )}
    </div>
  );
};

export default DataView;
