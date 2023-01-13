import React from "react";
import { fireEvent, screen } from '@testing-library/react'
import Select from "../Select";
import customRender from "../../utils/customRender";

describe('Select component tests', () => {
  it('should render with default value text', () => {
    const providerProps = {
      value: {
        neighborhoood: ""
      }
    }
    customRender(<Select setName={() => {}} />, {providerProps});
    expect(screen.getByDisplayValue('Selecione um bairro')).toBeInTheDocument();
  })

  it('should change text when selected', () => {
    const providerProps = {
      value: {
        neighborhoood: "",
        setNeighborhood: () => {},
      }
    }
    customRender(<Select setName={() => {}} />, {providerProps});
    fireEvent.change(screen.getByTestId('select'), {
      target: {value: "1"}
    })
    expect(screen.getByDisplayValue('Jd. Colinas')).toBeInTheDocument();
  })
});
