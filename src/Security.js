import React from 'react';
import classes from './Secrity.module.css';
import img from './img1.jpg'; // Cybersecurity placeholder image
import img1 from './img2.jpg'; // Concentric AI placeholder image
import img2 from './img3.jpg'; // LinkedIn Fine placeholder image
import thumb1 from './p.jpg'; // Thumbnail for the first video
import thumb2 from './p1.jpg'; // Thumbnail for the second video
import youtubeIcon from './youtube (1).png';
import Securitypage2 from "./securitypage2";
import sidebarImg1 from './photo.png';
import sidebarImg2 from './photo1.png'; 
import sidebarimg3 from './centr2.jpg';

function App() {
  return (
    <div className={classes.container}>
      
      {/* Main Content and Sidebar */}
      <div className={classes.mainContent}>

        {/* Picked Section */}
        <div className={classes.picked}>
          <h2>Picked</h2>
          <div className={classes.pickedContent}>
            <div className={classes.pickedItem}>
              <img src={img} alt="cybersecurity" /> 
              <p className={classes.category}>Security</p>
              <h3>Over $1 Million Paid Out at Pwn2Own Ireland 2024</h3>
              <span>John Doe • 1 DAY AGO</span>
            </div>
            <div className={classes.pickedItem}>
              <img src={img1} alt="concentric AI" /> 
              <p className={classes.category}>Funding</p>
              <h3>Concentric AI Secures $45M Series B Funding</h3>
              <span>John Doe • 1 DAY AGO</span>
            </div>
            <div className={classes.pickedItem}>
              <img src={img2} alt="LinkedIn fine" /> 
              <p className={classes.category}>Data Privacy</p>
              <h3>LinkedIn Hit With 310M Euro Fine for Data Violations</h3>
              <span>John Doe • 1 DAY AGO</span>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <h2>Cybersecurity Videos</h2>
        <div className={classes.videos}>
          <div className={classes.videoItem}>
            <a href="https://youtu.be/qVET1vD3NtQ?si=EwmYJodEVqjhVU1f" target="_blank" rel="noopener noreferrer">
              <img src={thumb1} alt="Cyber Security Video 1" className={classes.videoThumbnail} />
              <img src={youtubeIcon} alt="YouTube" className={classes.youtubeIcon} />
            </a>
            <p>Latest Cybersecurity News and Insights</p>
          </div>
          <div className={classes.videopart}>
            <div className={classes.videoItem}>
              <a href="https://youtu.be/Fg9hCKH1sYs?si=IVETik-cdlv2QM72" target="_blank" rel="noopener noreferrer">
                <img src={thumb2} alt="Cyber Security Video 2" className={classes.videoThumbnail} />
                <img src={youtubeIcon} alt="YouTube" className={classes.youtubeIcon} />
              </a>
              <p>In-Depth Cybersecurity Analysis</p>
            </div>
            <div className={classes.videoItem}>
              <a href="https://youtu.be/Fg9hCKH1sYs?si=IVETik-cdlv2QM72" target="_blank" rel="noopener noreferrer">
                <img src={sidebarimg3} alt="Cyber Security Video 2" className={classes.videoThumbnail} />
                <img src={youtubeIcon} alt="YouTube" className={classes.youtubeIcon} />
              </a>
              <p>In-Depth Cybersecurity Analysis</p>
            </div>
          </div>
        </div>

        <Securitypage2 />
      </div>
     
      <div className={classes.news}>
        <h2>News</h2>
        <ul className={classes.newsList}>
          <li className={classes.newsItem}>
            <img src={img} alt="US, Australia Release New Security Guide" />
            <div>
              <h3>US, Australia Release New Security Guide for Software Makers</h3>
              <span>1 DAY AGO</span>
            </div>
          </li>
          <li className={classes.newsItem}>
            <img src={img1} alt="Landmark Admin Data Breach" />
            <div>
              <h3>Landmark Admin Discloses Data Breach Impacting 800,000 People</h3>
              <span>2 DAYS AGO</span>
            </div>
          </li>
          <li className={classes.newsItem}>
            <img src={img2} alt="Change Healthcare Ransomware Attack" />
            <div>
              <h3>Change Healthcare Ransomware Attack Impacts 100 Million People</h3>
              <span>3 DAYS AGO</span>
            </div>
          </li>
          <li className={classes.newsItem}>
            <img src={img} alt="CVE Turns 25" />
            <div>
              <h3>In Other News: CVE Turns 25, Henry Schein Data Breach</h3>
              <span>4 DAYS AGO</span>
            </div>
          </li>
          <li className={classes.newsItem}>
            <img src={img1} alt="Pwn2Own Ireland 2024" />
            <div>
              <h3>Over $1 Million Paid Out at Pwn2Own Ireland 2024</h3>
              <span>5 DAYS AGO</span>
            </div>
          </li>
          <li className={classes.newsItem}>
            <img src={img2} alt="LinkedIn 310 Million Euro Fine" />
            <div>
              <h3>LinkedIn Hit With 310 Million Euro Fine for Data Privacy Violations</h3>
              <span>6 DAYS AGO</span>
            </div>
          </li>
        </ul>

        <div className={classes.sidebar}>
          <h2>ICS/OT Security News</h2>

          <div className={classes.sidebarItem}>
            <img src={sidebarImg1} alt="ICS/OT" />
            <h3>Live From Atlanta</h3>
            <p>SecurityWeek’s 2024 ICS Cybersecurity Conference kicks off in Atlanta.</p>
          </div>
          <div className={classes.sidebarItem}>
            <img src={sidebarImg2} alt="ICS/OT" />
            <h3>Critical Vulnerabilities Expose mbNET.mini, Helmholz Industrial Routers to Attacks</h3>
          </div>
          {/* <div className={classes.sidebarItem}>
            <img src={sidebarImg2} alt="Palo Alto Networks" />
            <h3>Palo Alto Networks Adds New Capabilities to OT Security Solution</h3>
          </div> */}
        </div>

        <h2>Tech Security Articles</h2>
        <ul className={classes.techArticles}>
          <li><a href="https://ciso.economictimes.indiatimes.com/news/cybercrime-fraud/india-could-attract-nearly-1-trillion-cyberattacks-annually-by-2033-report/114807348?utm_source=top_story&utm_medium=latestNews" target="_blank" rel="noopener noreferrer">India Could Attract Nearly $1 Trillion Cyberattacks Annually by 2033: Report</a></li>
          <li><a href="https://ciso.economictimes.indiatimes.com/news/research/india-needs-stronger-security-measures-to-tackle-cyber-attacks-experts/114763144?utm_source=top_story&utm_medium=latestNews" target="_blank" rel="noopener noreferrer">India Needs Stronger Security Measures to Tackle Cyber Attacks: Experts</a></li>
          <li><a href="https://ciso.economictimes.indiatimes.com/news/research/india-needs-stronger-security-measures-to-tackle-cyber-attacks-experts/114763144?utm_source=most_read&utm_medium=latestNews" target="_blank" rel="noopener noreferrer">India Needs Stronger Security Measures to Tackle Cyber Attacks: Experts (Most Read)</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
