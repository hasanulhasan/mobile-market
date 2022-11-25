import React from 'react';
import AllCategories from '../AllCategories/AllCategories';
import Banner from './Banner/Banner';
import CategoryShow from './CategoryShow/CategoryShow';
import Hero from './Hero/Hero';
import Stat from './Stat/Stat';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <CategoryShow></CategoryShow>
      <Stat></Stat>
    </div>
  );
};

export default Home;