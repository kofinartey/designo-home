import { createUseStyles } from "react-jss";
import colors from "./utils/colors";

const HomeStyles = createUseStyles({
  Home: {},
  wrapper: {},

  "@media only screen and (min-width:48rem)": {
    wrapper: {
      margin: "0 5%",
    },
  },
  "@media only screen and (min-width:64rem)": {
    wrapper: {
      margin: "0 10%",
    },
  },
});

export default HomeStyles;
