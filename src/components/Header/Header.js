import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="custom-bg mb-36 h-[645px] bg-cover bg-center text-white">
      <Navbar />
      <div className="mx-auto max-w-[70rem] px-6">
        <h1 className="mt-[110px] max-w-[38rem] border-2 border-white p-10 text-6xl font-light uppercase">
          Immersive Experiences that deliver
        </h1>
      </div>
    </div>
  );
};

export default Header;
