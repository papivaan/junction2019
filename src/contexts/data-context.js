import React, { createContext, useContext } from "react";

import data_json from "../assets/data/data_2019.json";

const mappedData = data_json.map(d => {
  const location =
    d.map_data.candidates.length > 0 &&
    d.map_data.candidates[0].geometry.location;
  return { ...d, status: d.status.split(" "), location };
});

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data: mappedData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
