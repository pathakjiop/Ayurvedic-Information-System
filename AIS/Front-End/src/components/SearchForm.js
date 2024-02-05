// SearchForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setHerbData, setLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting form
    try {
        console.log({ "herb_name": query });
        const response = await axios.post('http://localhost:5000/get-herb-details', { "herb_name": query });
      setHerbData(response.data);
    } catch (error) {
      console.error('Error fetching herb data:', error);
    } finally {
        setLoading(false); // Set loading state to false after receiving response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter herb name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
