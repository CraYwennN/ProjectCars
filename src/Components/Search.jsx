import React, { useState } from "react";
import CarsData from "../cars/cars"
import { Link } from "react-router-dom";
const Search = ({ carsData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the car items based on the search query
    const filteredCars = carsData.filter(
      (car) =>
        car.Name.toLowerCase().includes(query.toLowerCase()) ||
        car.Model.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCars(filteredCars);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle the search query here, e.g., pass it to a search function or search API
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className="search-container">
      <Link className="search-h1"  to ={"/"}><h1 >Porsche</h1></Link>
      <div className="searchbar">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            <img src={"search-icon.png"} alt="Search Icon" />
          </button>
        </form>
      </div>
      <p className="search-term">Enter search term.</p>

      <div className="searched-items">
      {filteredCars.length > 0 ? (
        <ul className="search-ul">
          {filteredCars.map((car) => (
            <li key={car.Id}>
              <div className="search-content">
              <h2>{car.Name}</h2>
              <p>Model: {car.Model}</p>
              <p>Year of making: {car["Year of making"]}</p>
              
              <img className={"searched-image"}src={car.img} alt={car.Name} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
      </div>
    </div>
  );
};

export default Search;



