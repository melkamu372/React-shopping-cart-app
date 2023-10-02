import React from 'react';
import Shop from '../store/shop'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
      <h1>Welcome to our store!</h1>
      <p>Explore our amazing collection of products.</p>
      <Shop/>
      {/* Add any additional content you'd like */}
    </>
  );
};

export default Home;