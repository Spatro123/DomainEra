import React from 'react';
import classes from './startup.module.css';
import img from './img1.jpg';
import Startuppage from './Stratuppage2';

function Startup() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <div className={classes.headerleft}>
          <h1>Innovate, Integrate With Our Software Solutions</h1>
          <p>
            Use our cutting-edge technologies to improve productivity and optimize processes in a seamless manner.
            Grow your company to new heights with our specialized team's scalable, dependable, and secure solutions.
          </p>
          <ul className={classes.features}>
            <li>✔ Innovative Solutions For Growth</li>
            <li>✔ Reduce Operational Costs</li>
            <li>✔ Achieve Smooth Integration</li>
            <li>✔ User-Friendly Interfaces</li>
          </ul>
          <button className={classes.ctabtn}>More Details</button>
        </div>
        <div className={classes.headerright}>
          <img src={img} alt="Woman using software" className={classes.headerimage} />
        </div>
      </header>

      <section className={classes.stats}>
        <div className={classes.stat}>
          <h2>1538+</h2>
          <p>Clients</p>
          <span className={classes.growth}>+7.8% since last week</span>
        </div>
        <div className={classes.stat}>
          <h2>$30M</h2>
          <p>Growth</p>
          <span className={classes.decline}>-3.5% since last week</span>
        </div>
        <div className={classes.stat}>
          <h2>85%</h2>
          <p>Income</p>
          <span className={classes.decline}>-0.4% since last week</span>
        </div>
      </section>

      <section className={classes.footerstats}>
        <div className={classes.footerstat}>90K+ Worldwide Clients</div>
        <div className={classes.footerstat}>2M+ Professional Staff</div>
        <div className={classes.footerstat}>16K+ Projects Worldwide</div>
        <div className={classes.footerstat}>7K+ Domestic Projects</div>
        <div className={classes.footerstat}>95% Star Rated Reviews</div>
      </section>

      <Startuppage/>
    </div>
  );
}

export default Startup;
