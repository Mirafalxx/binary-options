import React from "react";

export const ChartContext = React.createContext();

export function ChartProvider({ children, chartSettings }) {
  return (
    <ChartContext.Provider
      value={{
        chartSettings,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
}
