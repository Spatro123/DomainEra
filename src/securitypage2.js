import React from 'react';
import classes from './securtitypage2.module.css';
import img from './img1.jpg'; // Placeholder image for CVE news
import img1 from './img2.jpg'; // Placeholder image for Concentric AI funding
import img2 from './img3.jpg'; // Placeholder image for LinkedIn fine
import sidebarImg1 from './img1.jpg'; // Placeholder image for ICS/OT security
import sidebarImg2 from './img2.jpg'; // Placeholder image for Live from Atlanta
import sidebarImg3 from './img3.jpg'; // Placeholder image for Palo Alto Networks

function App() {
  return (
    <div className={classes.container}>
      {/* Main Content */}
      <div className={classes.mainContent}>
        {/* Featured News Section */}
        <div className={classes.featuredNews}>
          <h2>Latest Cybersecurity News</h2>

          {/* News Box 1 */}
          <div className={classes.newsBox}>
            <img src={img} alt="CVE Program" />
            <div className={classes.newsContent}>
              <h3>In Other News: CVE Turns 25, Henry Schein Data Breach, Reward for Shahid Hemmat Hackers</h3>
              <p>Noteworthy stories that might have slipped under the radar: CVE Program celebrates 25th anniversary...</p>
            </div>
          </div>

          {/* News Box 2 */}
          <div className={classes.newsBox}>
            <img src={img1} alt="Concentric AI Secures Funding" />
            <div className={classes.newsContent}>
              <h3>Concentric AI Secures $45M Series B Funding to Expand DSPM Tech</h3>
              <p>Concentric AI banks capital to compete in the data security governance market...</p>
            </div>
          </div>

          {/* News Box 3 */}
          <div className={classes.newsBox}>
            <img src={img2} alt="LinkedIn Fine" />
            <div className={classes.newsContent}>
              <h3>LinkedIn Hit With 310 Million Euro Fine for Data Privacy Violations</h3>
              <p>LinkedIn has received a 310 million euro fine for data privacy violations...</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default App;
