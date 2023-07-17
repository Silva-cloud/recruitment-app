import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Wave from 'react-wavify';
import BenifitsOfOnlineRecruiting from '../Data/BenifitsOfOnlineRecruiting/Benifits';
import coverImage from '../utils/images/business-selecting.jpg';
import Testimonial from './Testimonial';
import Benifit from './Benifit';

const Hero = () => {
  const benifits = BenifitsOfOnlineRecruiting.map((item) => {
    return (
      <section className="relative w-3/4  min-h-[67vh] flex flex-col items-center">
        <Benifit title={item.title} body={item.body} />
      </section>
    );
  });
  return (
    <div className="Hero flex flex-col items-center">
      <section className="min-[75vh] w-screen flex flex-col items-center">
        <p className="w-3/4 mt-36 text-[#D9E3EA] font-['Open_Sans'] font-extrabold text-7xl whitespace-pre-line animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          Providing talents from all over the globe
        </p>
        <p className="w-3/4 mt-8 text-[#D9E3EA] font-['Open_Sans'] font-extrabold text-7xl whitespace-pre-line animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          just for you
        </p>
        <p className="w-3/4 font-['Open_Sans'] whitespace-pre-line text-[#9BA9B4] pt-8 mt-8">
          Rightchoice is a digital recruitment app aimed to help you find the
          right employee for the job.
          {'\n'}
          Using Rightchoice is the right choice to contact the talents you need
        </p>
        <Wave
          fill="#1277b0"
          paused={false}
          options={{
            height: 80,
            amplitude: 30,
            speed: 0.25,
            points: 8,
          }}
        />
      </section>

      <section className="min-h-screen flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative flex flex-col items-center w-3/4 mt-36"
        >
          <img src={coverImage} className="  h-96" />
          <p className="w-1/3 absolute top-[35%]  right-[15%] whitespace-pre-line text-white font-semibold text-2xl">
            providing supreme services just for you!
          </p>
          <p className="w-1/3 absolute top-[69%]  right-[15%]  text-white font-semibold font-['Open_Sans'] whitespace-pre-line text-[#9BA9B4]">
            recruiting never been easier
          </p>
        </motion.div>
      </section>
      <section className="relative w-3/4  min-h-[35vh] flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-3/4  text-[#D9E3EA] font-['Open_Sans'] font-extrabold text-6xl whitespace-pre-line animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
        >
          Benefits of online recruiting
        </motion.p>
      </section>
      {benifits}
      <section className="relative w-3/4  min-h-[75vh] flex flex-col items-center  w-3/4">
        <motion.p
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-3/4  text-[#D9E3EA] font-['Open_Sans'] font-extrabold text-6xl whitespace-pre-line animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
        >
          <hr className="bg-[#1277b029] w-full my-24" />
          Don't take our word for it
        </motion.p>
        <div className="felx flex-col">
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Hero;
