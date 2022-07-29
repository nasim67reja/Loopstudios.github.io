import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="custom-bg h-[645px] bg-cover bg-center text-white">
      <Navbar />
      <div className="mx-auto max-w-[1113px] px-12">
        <div className="mt-[110px] max-w-[657px] border-2 border-white p-16 text-6xl font-light uppercase">
          Immersive Experiences that deliver
        </div>
      </div>
    </div>
  );
};

export default Header;
