import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const HeroStyles = createUseStyles({
  hero: {
    width: "100%",
    height: "53rem",
    backgroundColor: colors.primary.peach,
    color: "white",
    padding: "2rem 0",
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
  },
  wrapper: {
    margin: "auto",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h1": {
      margin: "1rem 0",
      width: "25rem",
    },
    "& p": {
      margin: "0 0 2rem 0",
      maxWidth: "26rem",
    },
  },
  hero_image: {
    width: "100%",
    maxWidth: "50rem",
    marginTop: "8rem",
    "& img": {
      width: "100%",
      transform: "scale(1.8)",
    },
  },
  "@media only screen and (min-width:48rem)": {
    hero: {
      borderRadius: "1rem",
      "& h1": {
        width: "35rem",
      },
      "& p": {},
    },
    hero_image: {
      marginTop: "-8rem",
      "& img": {
        transform: "scale(1)",
      },
    },
  },

  "@media only screen and (min-width:64rem)": {
    hero: {
      height: "30rem",
      textAlign: "start",
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    text: {
      //   backgroundColor: "red",
      alignItems: "flex-start",
    },
    hero_image: {
      //   backgroundColor: "green",
      marginTop: "6rem",
      "& img": {
        transform: "scale(2)",
      },
    },
  },

  "@media only screen and (min-width:90rem)": {
    hero: {
      height: "40rem",
      textAlign: "start",
    },
    wrapper: {
      paddingTop: "4rem",
    },
    text: {
      //   backgroundColor: "red",
    },
    hero_image: {
      marginTop: "0rem",
      //   backgroundColor: "green",
      "& img": {
        transform: "scale(1.4)",
      },
    },
  },
});

export default HeroStyles;
