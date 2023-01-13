import React from "react";
import customRender from "../../utils/customRender";
import Dashboard from "../Dashboard"
import { screen } from "@testing-library/react";

describe('Dashboard component tests', () => {
  it('should render Dashboard with no data available', () => {
    const providerProps = {
      value: {
        neighborhood: "",
        geoData: null,
        populationData: null
      }
    }
    customRender(<Dashboard />, {providerProps});
    const noDataWarning = screen.getByText("Escolha um bairro no seletor acima.");
    const loading = screen.getByText("Aguarde...");
    expect(noDataWarning).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
  });
});

