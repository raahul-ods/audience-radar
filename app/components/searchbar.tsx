import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import SearchIcon from "../icons/searchIcon";
import SearchLens from "../icons/searchLens";

interface SearchBarProps {
  searchQuery: string | null;
  setSearchQuery: any;
  cta: any;
}

const SearchBar: React.FC<SearchBarProps> = ({searchQuery,setSearchQuery, cta}) => {
  // const [searchTerm, setSearchTerm] = useState<string | null>("");

  // useEffect(() => {
  //   setSearchQuery(searchQuery)
  // }, [])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault(); // Prevent form submission if used within a form
    alert(`Search initiated for: ${searchQuery}`);
    cta()
    // You can handle the search functionality here
  };

  return (
    <div className=" w-full px-2 bg-white/80 rounded-xl backdrop-blur-[34px] flex items-center gap-[20px] shadow-md">

      <div className="p-2 flex items-center gap-2 flex-grow">
        <div className="relative flex items-center justify-center">
          <SearchLens/>
        </div>
        <input
          type="text"
          value={searchQuery || ""}
          onChange={handleInputChange}
          placeholder="Paste your brand URL here"
          className="text-black text-[16px] font-normal font-inter bg-transparent border-none outline-none w-full"
        />
      </div>

      <button
        onClick={handleButtonClick}
        className="p-2 bg-[#55b271] rounded-lg flex items-center justify-center"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
