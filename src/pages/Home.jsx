import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import CallToAction from '../components/CallToAction';
import Tools from '../components/Tools';
import FAQTeaser from '../components/FAQTeaser'; // Renamed from SecondaryCTA

const Home = () => {
  return (
    <div>
      <Hero />
      <ProblemSolution />
      <Tools />
      <CallToAction />
      <FAQTeaser />
    </div>
  );
};

export default Home;
