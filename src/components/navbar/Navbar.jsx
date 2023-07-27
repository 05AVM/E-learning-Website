import React, { useEffect, useState } from 'react';
import { navLinks } from "../../data";
import MobileNavLink from './MobileNavLink';
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from './NavLink';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
    className={`${
      active ? "shadow-lg bg-Solitude" : ""
    } fixed w-full top-0 left-0 z-20`}
  >
    <div>
      <div
        className={`${
          active ? "py-2 transition-all duration-300" : "py-4"
        } container  mx-auto flex items-center justify-between px-2`}
      >
          <div className='flex items-center gap-4'>
            <HiMenuAlt1
              className='text-3xl sm:hidden cursor-pointer'
              onClick={() => setToggle(true)}
            />
            <div className="text-3xl text-Teal uppercase tracking-wide font-bold">
              SkillX
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg
          transition-colors duration-300 hover:bg-yellow-500 hover:text-teal-500
          transform hover:border-gray "onClick={() => loginWithRedirect()}>Sign Up</button>
          {toggle && (
            <div className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
              {navLinks.map(navLink => {
                return <MobileNavLink key={navLink.id} {...navLink} setToggle={setToggle} />;
              })}
              <HiX 
                className="absolute right-12 top-12 text-3xl cursor-pointer" 
                onClick={(prev) => setToggle(!prev)}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;


/*
text-xs: Extra-small text
text-sm: Small text
text-base: Base/default text size
text-lg: Large text
text-xl: Extra-large text
text-2xl: Twice the base size
text-3xl: Three times the base size
text-4xl: Four times the base size
text-5xl: Five times the base size
text-6xl: Six times the base size
Font weight:

font-thin: Thin font weight
font-normal: Normal font weight
font-medium: Medium font weight
font-semibold: Semi-bold font weight
font-bold: Bold font weight
font-extrabold: Extra-bold font weight
font-black: Black font weight

*/