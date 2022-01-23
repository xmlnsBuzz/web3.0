import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState } from 'react';
import logo from '../../images/logo.png';

const NavbarItem = ( { title, classProps } ) => {
  return <li className={`hover:text-red-300 mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState( false );

  return (
    <nav className="nav">
      <div className="imgContainer">
        <img src={logo} alt="navbar" className="w-32 cursor-pointer" />
      </div>
      <ul className="navList">
        {[ 'Market', 'Exchange', 'Tutorials', 'Wallets' ].map( ( item, index ) => (
          <NavbarItem key={item + index} title={item} />
        ) )}
        <li className="navListItemLogin">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu( false )}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu( true )}
          />
        )}
        {toggleMenu && (
          <ul
            className="navToggleMenuList blue-glassmorphism"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu( false )} className="bg-red-500 cursor-pointer rounded-2xl p-1" />
            </li>
            {[ 'Market', 'Exchange', 'Tutorials', 'Wallets' ].map(
              ( item, index ) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
