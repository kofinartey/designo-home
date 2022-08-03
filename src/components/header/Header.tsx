import React, { useState } from "react";

import HeaderStyles from "./HeaderStyles";
import logo from "../../assets/shared/desktop/logo-dark.png";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";

function Header() {
  const classes = HeaderStyles();
  const [showMenu, setShowMenu] = useState(false);

  const menuStyles = {
    left: 0,
  };
  const overlayStyles = {
    opacity: 0.5,
    PointerEvent: "all",
  };

  return (
    <header className={classes.Header}>
      <div className={classes.wrapper}>
        <a href="#" className={classes.logo}>
          <img src={logo} alt="logo" />
        </a>
        <div className={classes.desktop_links}>
          <a href="#">Our Company</a>
          <a href="#">Location</a>
          <a href="#">Contacts</a>
        </div>
        <div className={classes.mobile_menu} style={showMenu ? menuStyles : {}}>
          <div
            className={classes.overlay}
            style={showMenu ? overlayStyles : {}}
          ></div>
          <a href="#">Our Company</a>
          <a href="#">Location</a>
          <a href="#">Contacts</a>
        </div>

        <img
          src={showMenu ? close : hamburger}
          className={classes.hamburger}
          onClick={() => setShowMenu(!showMenu)}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
