import { NavMenu } from "../Header/Navbar";
import Logo from "../../Images/svg/logo.svg";

import Facebook from "../../Images/svg/icon-facebook.svg";
import Twitter from "../../Images/svg/icon-twitter.svg";
import Pinterest from "../../Images/svg/icon-pinterest.svg";
import Instagram from "../../Images/svg/icon-instagram.svg";

const logos = [Facebook, Twitter, Pinterest, Instagram];

const alts = ["facebook", "Twitter", "Pinterest", "Instagram"];
const links = alts.map((link) => `https://www.${link}.com/`);

const Logolist = () => {
  return (
    <div className="ite flex gap-4">
      {logos.map((logo, i) => (
        <a href={links[i]} rel="noreferrer" target="_blank" key={Math.random()}>
          <img src={logo} alt={`${alts[i]} logo`} className="custom-test w-5" />
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="al mx-auto flex max-w-[70rem] items-center justify-between px-6 py-14">
        <div className="flex flex-col gap-6">
          <img src={Logo} alt="Loopstudios logo" className="w-[8rem]" />
          <NavMenu />
        </div>
        <div className="flex flex-col items-end gap-6">
          <Logolist />
          <p className="text-[14px] text-[#8c8c8c]">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
