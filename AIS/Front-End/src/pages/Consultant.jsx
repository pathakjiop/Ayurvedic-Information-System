import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RemedyDetails from '../components/RemedyDetails';
import { SpinnerCircular } from 'spinners-react';
import SpeechRecognitionComponent from '../components/SpeechRecognitionComponent';
import { useState } from 'react';
import './Consultant'
import './Consultant.css'; // Import the CSS file here



const Consultant = () => {
const [remedyData, setRemedyData] = useState(null);
const [loading, setLoading] = useState(false);

  return (
     <div className="consultantContainer" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FEFAE0', // Apply the background color here
        minHeight: '100vh', // Make sure it covers the full view height
        paddingBottom: '100px',
      }}>
        <h2 style={{ marginTop: '50px' }} >Consult To Our AI Doctor</h2>
        <SpeechRecognitionComponent setRemedyData={setRemedyData} setLoading={setLoading} />
        {loading && <SpinnerCircular color='#000000'/>}
        {remedyData && <RemedyDetails remedyData={remedyData} />}
    </div>
  );
};

export default Consultant;
