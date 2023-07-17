import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import '../styles/Header.css'
import rightChoiceLogo from '../utils/images/right choice.png'


const Header = () => {

    return (
    <div className="header h-14 bg-[#151719] py-4">
        <div className="container mx-auto">
            <div className="flex flex-row justify-between px-3">
              <Link to="/">
                <div className="px-4 flex flex-row items-center transition ease-in-out hover:text-gray-600 text-3xl  duration-300">
                  <img src ={rightChoiceLogo} className="h-8 w-8" />
                  <p className="text-white capitalize text-3xl font-medium  text-inherit">rightchoice</p>
                </div>
              </Link>
              <div className="flex flex-row">
                <Link to="/UserLoginAndRegister">
                  <div className="px-4">
                    <p className="text-white capitalize font-medium py-2 px-5 transition ease-in-out hover:text-[#915c0f]  duration-300">sign in/ up</p>
                  </div>
                </Link>
                <Link to= "/CandidateSearch">
                  <div className="px-4">
                    <p className="text-white hover:bg-[#915c0f] hover:rounded-lg ease-in-out duration-300 py-2 px-5 capitalize font-medium">Recruit</p>
                  </div>
                </Link>           
              </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
