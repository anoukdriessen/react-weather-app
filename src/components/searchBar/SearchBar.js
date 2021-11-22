import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({setLocationHandler}) {
    const [ query, setQuery ] = useState('');

    function onSearchFormSubmit(e) {
        e.preventDefault();
        console.log('Er is op de knop geklikt');
        setLocationHandler(query);
        console.log(query);
    }
  return (
    <form className="searchbar" onSubmit={onSearchFormSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">
        Zoek
      </button>
    </form>
  );
}

export default SearchBar;
