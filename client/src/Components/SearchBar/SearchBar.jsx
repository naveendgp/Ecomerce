import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className=" flex border items-center border border-gray-200 py-[2px] ml-10 bg-gray-100 rounded-md w-1/3">
      <FontAwesomeIcon icon={faSearch} className="ml-3" />
 
      <input
        placeholder="Search"
        className="h-full w-full rounded-md p-2 border-none outline-none bg-gray-100 flex items-start"
      />
    </div>
  );
};

export default SearchBar;
