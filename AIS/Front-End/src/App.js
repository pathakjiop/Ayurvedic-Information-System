// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import HerbDetails from './components/HerbDetails';
import { SpinnerCircular } from 'spinners-react';
import SpeechRecognitionComponent from './components/SpeechRecognitionComponent';
import './App.css';
import RemedyDetails from './components/RemedyDetails';
import { Nav, Tab, TabContainer, TabContent } from 'react-bootstrap';

function App() {
  const [herbData, setHerbData] = useState(null);
  const [remedyData, setRemedyData] = useState(null);
  const [activeTab, setActiveTab] = useState('link-1');

  const [loading, setLoading] = useState(false);

  const handleSetHerbData = (data) => {
    setHerbData(data);
    setLoading(false);
  };

  const handleSetRemedyData = (data) => {
    setRemedyData(data);
    setLoading(false);
  }

  return (
    <div className="App">
      <h1>Ayurvedic Information System</h1>

      <Nav fill variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Herb Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">AI Doctor</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <Tab.Content>
        <Tab.Container activeKey={activeTab}>
          <Tab.Content>
            <Tab.Pane eventKey="link-1">
            <h2>Herb Information</h2>
              <SearchForm setHerbData={handleSetHerbData} setLoading={setLoading} />
              {loading && <SpinnerCircular color='#000000'/>}
              {herbData && <HerbDetails herbData={herbData} />}
            </Tab.Pane>
            <Tab.Pane eventKey="link-2">
            <h2>Consult To Our AI Doctor</h2>
            <SpeechRecognitionComponent setRemedyData={handleSetRemedyData} setLoading={setLoading} />
            {loading && <SpinnerCircular color='#000000'/>}
            {remedyData && <RemedyDetails remedyData={remedyData} />}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Tab.Content>
    </div>
  );
}

export default App;
