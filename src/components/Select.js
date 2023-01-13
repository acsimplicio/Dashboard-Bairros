import React from "react";
import { DashboardContext } from "../context/DashboardContext";
import "../styles/Select.css";

const Select = ({ setName }) => {
  const context = React.useContext(DashboardContext);

  const onChange = (target) => {
    context.setNeighborhood(target.value);
    setName(target.options[target.selectedIndex].text);
  };

  return (
    <select
      data-testid="select"
      className="neighborhood-selection"
      value={context.neighborhood}
      onChange={({ target }) => onChange(target)}
    >
      <option value="">
        Selecione um bairro
      </option>
      <option value="1">Jd. Colinas</option>
      <option value="2">Jd. das Industrias</option>
      <option value="3">Jd. Alvorada</option>
      <option value="4">Pq. Res. Aquarius</option>
    </select>
  );
};

export default Select;
