import React from "react";
import Navbar from "../Header/Navbar";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-[70rem] justify-between px-6">
        <div>
          <h3>Loopstudios</h3>
          <Navbar />
        </div>
        <div>2</div>
      </div>
    </footer>
  );
};

export default Footer;
