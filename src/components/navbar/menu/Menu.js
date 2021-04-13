import React from 'react';

import './Menu.scss';

import Title from "../title/Title"

const Menu = ({callBack, menuOpen}) => {

  const buttonClick = () => callBack(!menuOpen);
  const closeMenu = () => callBack(false);

  let backClass = "background";
  let menuClass = "menuBurger";
  let topBurgerClass = "topBurger";
  let midBurgerClass = "midBurger";
  let bottomBurgerClass = "bottomBurger";

  if (menuOpen) {
    backClass += " open";
    menuClass += " open";
    topBurgerClass += " open";
    midBurgerClass += " open";
    bottomBurgerClass += " open";
  }

  return (
    <div className="menuMain">
      <div className="menuDesktop">
        <div className="titleDesktop">
          <Title />
        </div>
        <div className="menuesDesktop">
          <div className="menues">Home</div>
          <div className="menues">Random Facts</div>
          <div className="menues">JSON</div>
          <div className="menues">Add Facts</div>
        </div>
      </div>
    
      <div className="menuResponsive">
        <div 
          className={backClass}
          onClick={closeMenu}
        />
        <div className={menuClass}>
          <div className="menuItem" onClick={closeMenu}>Home</div>
          <div className="menuItem" onClick={closeMenu}>Random Facts</div>
          <div className="menuItem" onClick={closeMenu}>JSON</div>
          <div className="menuItem" onClick={closeMenu}>Add Facts</div>
        </div>
        <div className="button" onClick={buttonClick}> 
          <div className="burger">
            <div className={topBurgerClass} onClick={closeMenu}></div>
            <div className={midBurgerClass} onClick={closeMenu}></div>
            <div className={bottomBurgerClass} onClick={closeMenu}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;