import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
const SignUpForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    joinedNewsletter: true,
  });

  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords do not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log('Successfully signed up');
      console.log(formData);
    } else {
      console.log('Passwords do not match');
      return;
    }

    if (formData.joinedNewsletter) {
      console.log('Thanks for signing up for our newsletter!');
    }
  }

  return (
    <div className="SignUpForm w-[70vw] ">
      <section className="relative w-3/4  flex flex-col items-center mt-[3.5rem]">
        <motion.p
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-3/4  text-[#D9E3EA] font-['Open_Sans'] font-extrabold text-6xl whitespace-pre-line animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
        >
          Set Up your Rightchoice account
        </motion.p>
      </section>
      <form
        className="form flex flex-col gap-[1rem] mt-[5.5rem] text-[1.125rem] text-white"
        onSubmit={handleSubmit}
      >
        {/* //TODO:
        
        //change placeholder color 
        change border color normally and on focus*/}
        <input
          type="text"
          placeholder="First and last name"
          className="form--input w-[75%] h-[7.5%] px-[1.125rem] py-[0.85rem] rounded-xl bg-[transparent] border-solid-white"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          placeholder="Email address"
          className="form--input w-[75%] px-[1.125rem] py-[0.85rem] rounded-xl bg-[transparent] border-solid-white"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input w-[75%] px-[1.125rem] py-[0.85rem] rounded-xl bg-[transparent] border-solid-white"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input w-[75%] px-[1.125rem] py-[0.85rem] rounded-xl bg-[transparent] border-solid-white"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing flex flex-col items-start">
          {/* MAIN TODO:
            radio button handling for employer or employee */}
          <label htmlFor="okayToEmail" className="w-[100%] block text-[1.3rem]">
            Are you:
          </label>
          <input
            id="okayToEmail"
            type="radio"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          Searching for a talent
          <input
            id="okayToEmail"
            type="radio"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          Searching for a job
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
