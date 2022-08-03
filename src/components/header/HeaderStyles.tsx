import { createUseStyles } from "react-jss";
import colors from "../../utils/colors";

const HeaderStyles = createUseStyles({
  Header: {
    backgroundColor: "white",
    zIndex: 2,
  },
  wrapper: {
    margin: "auto",
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 0",
  },
  logo: {
    "& img": {
      width: "12.625rem",
    },
  },
  mobile_menu: {
    backgroundColor: colors.primary.black,
    position: "absolute",
    width: "100%",
    padding: "3rem",
    left: "-150rem",
    rigth: 0,
    top: "6rem",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease-in-out",
    // zIndex: 1,
    "& a": {
      color: "white",
      textTransform: "uppercase",
      fontSize: "1.5rem",
      letterSpacing: "0.2rem",
      padding: "1rem 0",
      "&:hover": {
        color: colors.secondary.light_peach,
      },
    },
  },
  overlay: {
    width: "100%",
    backgroundColor: "black",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0,
    pointerEvents: "none",
    transition: "all 0.3s ease-in-out",
  },
  desktop_links: {
    display: "none",
    textTransform: "uppercase",
    color: colors.primary.black,
    "& a": {
      marginLeft: "2rem",
      "&:hover": {
        color: colors.secondary.dark_grey,
        textDecoration: "underline",
      },
    },
  },
  hamburger: {},

  "@media only screen and (min-width:48rem)": {
    desktop_links: {
      display: "block",
    },
    hamburger: {
      display: "none",
    },
    mobile_menu: {
      display: "none",
    },
    overlay: {
      display: "none",
    },
  },

  "@media only screen and (min-width:64rem)": {
    wrapper: {
      width: "80%",
    },
  },
});

export default HeaderStyles;
