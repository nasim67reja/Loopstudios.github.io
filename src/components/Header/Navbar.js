import React from "react";

const LinkArr = ["About", "Careers", "Events", "Products", "Support"];

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-[70rem] items-center justify-between py-3 px-6 pt-7 ">
      <div className="text-3xl">Loopstudios</div>
      <ul className="flex gap-7">
        {LinkArr.map((el) => (
          <li key={Math.random()}>
            <a href="facebook.com">{el}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
