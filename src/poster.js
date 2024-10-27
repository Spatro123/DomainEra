import React from "react";
import poster from "./poster.jpg";
import book from "./Book.png"; 
import classes from './poster.module.css';

const SignupSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div> {/* Dark overlay for text readability */}
      <div className={classes.content}>
        <div className={classes.text}>
          <span>Sign Up</span> to get print & digital access to the Magazine
        </div>
        <div className={classes.image}>
          <img src={book} alt="Book" />
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
