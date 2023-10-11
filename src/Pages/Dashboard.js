import React, { useState } from "react";
import Input from "../Components/Input";
import axios from "axios";
import Table from "../Components/Table";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/search", { query });
      console.log(response.data);
      setSearchResults(response.data);
      setQuery("");
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      setQuery("");
    }
  };

  return (
    <div className=" flex flex-col items-center">
      <div className=" w-1/3">
        <Input
          label="City Name"
          type="text"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 text-white rounded-md py-2 px-4 mt-4 mb-4 "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <Table data={searchResults} />
    </div>
  );
};

export default Dashboard;
