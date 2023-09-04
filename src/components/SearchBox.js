import React from "react";
import { SearchInput,H2 } from '../css/style.js';

const SearchBox = ({ onSearch }) => {
  const handleSearch = (event) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <div>
      <H2>Search people</H2>
      <SearchInput onChange={handleSearch}></SearchInput>
    </div>
  );
};

export default SearchBox;
