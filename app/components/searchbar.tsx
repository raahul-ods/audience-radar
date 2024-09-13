import React, { useState, ChangeEvent, MouseEvent } from "react";
import SearchIcon from "../icons/searchIcon";
import SearchLens from "../icons/searchLens";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault(); // Prevent form submission if used within a form
    alert(`Search initiated for: ${searchTerm}`);
    // You can handle the search functionality here
  };

  return (
    <div className=" w-full px-2 bg-white/80 rounded-xl shadow backdrop-blur-[34px] flex items-center gap-[20px] shadow-md">

      <div className="p-2 flex items-center gap-2 flex-grow">
        <div className="relative flex items-center justify-center">
          <SearchLens/>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Paste your brand URL here"
          className="text-black text-[16px] font-normal font-inter bg-transparent border-none outline-none"
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
