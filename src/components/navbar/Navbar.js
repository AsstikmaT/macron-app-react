import './Navbar.scss';

import Title from "./title/Title";
import MyMenu from "./menu/Menu";

import React from 'react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="navbar">
      <div className="subNavbarDesktop">
        <MyMenu />
      </div>
      <div className="subNavbarResponsive">
        <Title menuOpen={menuOpen}/>
        <MyMenu menuOpen={menuOpen} callBack={setMenuOpen}/>
      </div>
    </div>
  );
}

export default Navbar;
