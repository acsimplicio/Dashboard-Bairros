import { screen } from "@testing-library/react";
import React from "react";
import customRender from "../../utils/customRender";
import MapChart from "../MapChart";

describe("MapChart component tests", () => {
  it("render MapChart without geoData", () => {
    const providerProps = {
      value: {
        geoData: null,
      },
    };
    customRender(<MapChart />, { providerProps });
    expect(screen.getByText(/Bairros/i)).toBeInTheDocument();
    const loading = screen.getByText("Aguarde...");
    expect(loading).toBeInTheDocument();
  });
});
