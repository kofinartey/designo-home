import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";

//my imports
import colors from "../../utils/colors";

type ButtonProps = {
  children: ReactNode;
  variant: "primary" | "secondary";
};

function Button({ children, variant }: ButtonProps) {
  const classes = createUseStyles({
    Button: {
      textTransform: "uppercase",
      padding: "1rem 1.5rem",
      backgroundColor: variant === "primary" ? "white" : colors.primary.peach,
      color: variant === "primary" ? colors.primary.black : "#fff",
      fontFamily: '"Jost", sans-serif',
      fontSize: "1rem",
      // fontWeight: "bold",
      letterSpacing: "0.2rem",
      borderRadius: "0.5rem",
      borderStyle: "none",
      cursor: "pointer",
      transition: "all ease-in-out 0.2s",
      "&:hover": {
        backgroundColor: colors.secondary.light_peach,
        color: "#fff",
      },
    },
  })();

  return <button className={classes.Button}>{children}</button>;
}

export default Button;
