import React from "react";
import Button from "../components/button/Button";
import HeroStyles from "./HeroStyles";
import heroImage from "../assets/home/desktop/image-hero-phone.png";

function Hero() {
  const classes = HeroStyles();
  return (
    <section className={classes.hero}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button variant="primary">Learn More</Button>
        </div>
        <div className={classes.hero_image}>
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
