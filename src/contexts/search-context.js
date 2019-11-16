import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [ searchQuery, setSearchQuery ] = useState('')

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
