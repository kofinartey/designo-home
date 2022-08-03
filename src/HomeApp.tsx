import React from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import HomeStyles from "./HomeStyles";
import Hero from "./layout/Hero";

function HomeApp() {
  const classes = HomeStyles();
  return (
    <div className={classes.Home}>
      <Header />
      <div className={classes.wrapper}>
        <Hero />
      </div>
    </div>
  );
}

export default HomeApp;
