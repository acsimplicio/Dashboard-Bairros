import React from "react";
import App from "./src/App";
import customRender from "./src/utils/customRender";

describe('App tests', () => {
  it('should render App without data', () => {
    const providerProps = {
      value: {
        geoData: null,
        populationData: null,
        neighborhood: "",
      }
    }
    customRender(<App />, {providerProps});
  });
});
