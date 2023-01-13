 import { render } from "@testing-library/react";
 import { DashboardContext } from "../context/DashboardContext";

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <DashboardContext.Provider {...providerProps}>{ui}</DashboardContext.Provider>,
    renderOptions,
  )
}

export default customRender;
