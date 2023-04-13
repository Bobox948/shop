import './App.css';
import shop from './shop.png';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my store</h1>
      <Link to="/products">
      <img alt="" src={shop} width="500" height="200"></img>
    </Link>
    </div>
  );
};

export default Home;