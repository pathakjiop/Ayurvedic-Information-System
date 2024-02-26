import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import HerbDetails from '../components/HerbDetails';
import { SpinnerCircular } from 'spinners-react';
import './HerbPage.css'; 

const HerbPage = () => {
  
    const [herbData, setHerbData] = useState(null);
    const [loading, setLoading] = useState(false);
 
    return (
    <div className="herbPageContainer" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FEFAE0', // Apply the background color here
        minHeight: '1000px',// Make sure it covers the full view height
      }}>
        <h2 style={{ marginTop: '50px' }} >Herb Information</h2>
            <SearchForm setHerbData={setHerbData} setLoading={setLoading} />
            {loading && <SpinnerCircular color='#000000'/>}

            
            {herbData && <HerbDetails herbData={herbData} />}
          

    </div>
  );
};

export default HerbPage;
