import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
const Benefit = ({ title, body }) => {
  return (
    <div className="benifit">
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: [0, 200, 200, -200] }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="font-['Open_Sans'] text-3xl font-bold text-white"
      >
        {title}
      </motion.p>

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: -75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-['Open_Sans'] text-xl text-white mt-8 font-semibold leading-loose"
        >
          {body}
        </motion.p>
        <motion.div
          initial={{ left: 0 }}
          whileInView={{ left: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className="absolute top-[4px] bottom-[4px] left-0 right-0 bg-[#c5cad3] z-20"
        ></motion.div>
      </div>
    </div>
  );
};
export default Benefit;
