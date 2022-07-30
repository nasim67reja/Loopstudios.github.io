import Logo from "../../Images/svg/logo.svg";

const LinkArr = ["About", "Careers", "Events", "Products", "Support"];

export const NavMenu = () => {
  return (
    <ul className="flex gap-7">
      {LinkArr.map((el) => (
        <li key={Math.random()} className="custom-shadow pb-[2px]">
          <a href="facebook.com">{el}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-[70rem] items-center justify-between py-3 px-6 pt-7 ">
      <img src={Logo} alt="Loopstudios logo" className="w-[10rem]" />
      <NavMenu />
    </nav>
  );
};

export default Navbar;
