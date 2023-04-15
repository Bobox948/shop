import './App.css';
import shop from './shop.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my store</h1>
      <Link to="/products"> {/* onclick on the image, redirect to the path /product */}
      <img alt="" src={shop} id="img"></img>
    </Link>
    </div>
  );
};

export default Home;