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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <input
        style={{
          textAlign: "center",
          padding: '10px',
          fontSize: '16px',
          border: '2px solid #ccc',
          borderRadius: '5px',
          width: '80%',
          maxWidth: '400px' // Ensures the input field is not too wide on larger screens
        }}
        
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter herb name"
      />
      <button type="submit" style={{
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white'
      }}>Search</button>
    </form>
  );
    }

export default SearchForm;
