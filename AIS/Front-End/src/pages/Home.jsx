import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Ayurvedic Information System</h1>
      <p className="headline">
      </p>
      <ul>
        <li>
          <Link to="/desktoptwo">Start</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
