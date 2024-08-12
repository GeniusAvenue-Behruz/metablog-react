import React, { useState } from 'react';
import SearchBar from './SearchBar';
import newsData from './news.json'; // Import your news data

function ParentComponent() {
  const [searchResults, setSearchResults] = useState([]);

  // Function to update search results
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar newsData={newsData} setSearchResults={handleSearchResults} />

      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ParentComponent;
