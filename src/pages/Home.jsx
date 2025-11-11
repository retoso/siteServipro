import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Tools from '../components/Tools';
import SecondaryCTA from '../components/SecondaryCTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProblemSolution />
      <Tools />
      <SecondaryCTA />
    </div>
  );
};

export default Home;
