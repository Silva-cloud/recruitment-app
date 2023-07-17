import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Card = ({ img, name, testimony, job }) => {
  return (
    <div className="bg-[#25282C] flex flex-col item-center my-24 p-6 relative  max-w-[33%] text-white">
      <motion.div
        initial={{ opacity: 0, x: -200, scale: [2] }}
        whileInView={{ opacity: 1, x: 0, scale: [4, 2, 1] }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex flex-row items-center"
      >
        <img src={img} className="max-w-[48px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="19"
          viewBox="0 0 24 19"
          fill="none"
          className="absolute left-14 top-6 w-[24px] h-[18px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.83333 6.23429C0.611105 8.743 0 11.1705 0 13.517V18.0476H7.21631V13.4047C7.21631 11.4326 7.52837 9.57923 8.15248 7.84435C8.7766 6.10947 9.72576 4.39334 11 2.69591L6.86525 0C4.73285 1.64751 3.05556 3.72558 1.83333 6.23429ZM14.8333 6.23429C13.6111 8.743 13 11.1705 13 13.517V18.0476H20.2163V13.4047C20.2163 11.4326 20.5284 9.57923 21.1525 7.84435C21.7766 6.10947 22.7258 4.39334 24 2.69591L19.8652 0C17.7328 1.64751 16.0556 3.72558 14.8333 6.23429Z"
            fill="#915c0f"
          />
        </svg>
        <p className="ml-2 text-sm font-bold">
          {name}/{' '}
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            {job}
          </span>
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="mt-4 text-base"
      >
        {testimony}
      </motion.p>
    </div>
  );
};

export default Card;
