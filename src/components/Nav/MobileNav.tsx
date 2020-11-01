import React, { useState } from "react";
import logo from "../assets/logo2.svg";

import { Link } from "react-router-dom";

import { createUseStyles, useTheme } from "react-jss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { BurgerMenu } from "./BurgerMenu";

import { CSSTransition } from "react-transition-group";
import "./animation.css";

const useStyles = createUseStyles((theme) => ({
  mobileNav: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    "@media(max-width: 575px)": {
      padding: ".5rem",
    },
  },
  bars: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  logo: {
    width: "50px",
  },
  header: {
    textTransform: "uppercase",
    fontWeight: "400",
    fontSize: "26px",
    letterSpacing: ".1rem",
    color: ({ theme }) => theme.primaryTextColor,
  },
  burgerMenu: {
    position: "absolute",
    top: "76px",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "360px",
    height: "100vh",
    width: "100%",
    background: "rgba(0,0,0,0.4)",
    "@media(max-width: 400px)": {
      left: "90%",
    },
  },
}));

export const MobileNav = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [showBurgermenu, setShowBurgermenu] = useState(false);
  return (
    <div className={classes.mobileNav}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="Logo" />
      </Link>
      <h1 className={classes.header}>A&amp;E</h1>
      <FontAwesomeIcon
        onClick={() => setShowBurgermenu(!showBurgermenu)}
        icon={faBars}
        size="lg"
        className={classes.bars}
        color="#2E3D49"
      />

      <CSSTransition
        in={showBurgermenu}
        unmountOnExit
        classNames="alert"
        timeout={300}
      >
        <BurgerMenu
          showBurgermenu={showBurgermenu}
          setShowBurgermenu={setShowBurgermenu}
        />
      </CSSTransition>
      <CSSTransition
        in={showBurgermenu}
        unmountOnExit
        classNames="overlay"
        timeout={300}
      >
        <div
          className={classes.overlay}
          onClick={() => setShowBurgermenu(false)}
        ></div>
      </CSSTransition>
    </div>
  );
};
