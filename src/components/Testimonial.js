import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import witness1 from '../utils/images/witness1.png';
import witness2 from '../utils/images/witness2.png';
import witness3 from '../utils/images/witness3.png';
import witnessesData from '../Data/Testimonial/Witnesses';
import Card from './Card';

const Testimonial = () => {
  const images = [witness1, witness2, witness3];
  const Cards = witnessesData.map((item, i) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        img={images[i]}
        testimony={item.testimony}
        job={item.job}
      />
    );
  });
  console.log('Cards Array-->', Cards);
  return (
    <div className="flex flex-row gap-x-6">
      {/* <Card name={'df'} img={witness1} testimony={'df'} />;{Cards} */}
      {Cards}
    </div>
  );
};

export default Testimonial;
