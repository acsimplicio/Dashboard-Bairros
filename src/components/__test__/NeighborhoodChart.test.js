import React from "react";
import customRender from "../../utils/customRender";
import NeighborhoodChart from "../NeighborhoodChart"
import { screen } from "@testing-library/react";

describe('NeighborhoodChart component tests', () => {
  it('should render NeighborhoodChart without populationData and neighborhood selected', () => {
    const providerProps = {
      value: {
        populationData: null,
        neighborhood: ""
      }
    }
    customRender(<NeighborhoodChart />, {providerProps})
    const warning = screen.getByText("Escolha um bairro no seletor acima.");
    const title = screen.getByText("Evolução Populacional de 2000 a 2006");
    expect(warning).toBeInTheDocument();
    expect(title).toBeTruthy();
  });

  it('should render NeighborhoodChart with populationData, no neighborhood selected', () => {
    const providerProps = {
      value: {
        populationData: [
          {
            id_geometria: 1,
            ano: "2000",
            populacao: 11567
          },
        ],
        neighborhood: ""
      }
    }
    customRender(<NeighborhoodChart />, {providerProps})
    const warning = screen.getByText("Escolha um bairro no seletor acima.");
    const title = screen.getByText("Evolução Populacional de 2000 a 2006");
    expect(warning).toBeInTheDocument();
    expect(title).toBeTruthy();
  });

  it('should render NeighborhoodChart with populationData with neighborhood selected', () => {
    const providerProps = {
      value: {
        populationData: [
          {
            id_geometria: 1,
            ano: "2000",
            populacao: 11567
          },
        ],
        neighborhood: "1"
      }
    }
    customRender(<NeighborhoodChart />, {providerProps})
    const title = screen.getByText(/Jd. Colinas/i);
    const chartLabel = screen.getByText("2000")
    expect(title).toBeTruthy();
    expect(chartLabel).toBeInTheDocument();
  });
});
