import React from 'react';
import classes from './Ai.module.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import Aisection2 from './Aisection2';

function App() {
  return (
    <div className={classes.appcontainer}>
      <div className={classes.articlescontainer}>
        <h2>Artificial Intelligence</h2>
        <div className={classes.articlesgrid}>
          {/* Main Articles */}
          <div className={classes.mainarticles}>
            <div className={classes.article}>
              <img src={img1} alt="Article 1" />
              <div className={classes.articlecontent}>
                <span className={classes.category}>Technology</span>
                <h3>This camera trades pictures for AI poetry</h3>
                <p>BY Elon Mask <span>1.9k views</span></p>
              </div>
            </div>
            <div className={classes.article}>
              <img src={img2} alt="Article 2" />
              <div className={classes.articlecontent}>
                <span className={classes.category}>Technology</span>
                <h3>Earbuds DevOps tools should be learning in 2024</h3>
                <p>BY Elon Mask <span>1.9k views</span></p>
              </div>
            </div>
            <div className={classes.article}>
              <img src={img3} alt="Article 3" />
              <div className={classes.articlecontent}>
                <span className={classes.category}>Technology</span>
                <h3>Efficient Rules How to Working Place Relationship</h3>
                <p>BY Elon Mask <span>1.9k views</span></p>
              </div>
            </div>
          </div>

          {/* Secondary Articles */}
          <div className={classes.secondaryarticles}>
            <div className={classes.articlerow}>
              <img src={img1} alt="Article 4" />
              <div className={classes.articlecontent}>
                <span className={classes.category}>Technology</span>
                <h4>Internal Knowledge Base – A Quick Guide by Bital</h4>
                <p><span>1.9k views</span></p>
              </div>
            </div>
            <div className={classes.articlerow}>
              <img src={img2} alt="Article 5" />
              <div className={classes.articlecontent}>
                <span className={classes.category}>Technology</span>
                <h4>How Can A Wellness Retreat Help Reconnect You to Yourself</h4>
                <p><span>1.9k views</span></p>
              </div>
            </div>
            <div className={classes.articlerow}>
              <img src={img3} alt="Article 6" />
              <div className={classes.articlecontent}>
                <span className={classes.category}>Technology</span>
                <h4>How to Create Wikis for Employee Onboarding & Training?</h4>
                <p><span>1.9k views</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className={classes.sidebar}>
        <div className={classes.popularposts}>
          <h3>Popular Post</h3>
          <ul>
            <li>
              <img src={img4} alt="Google Pixel" />
              <div className={classes.content}>
                <p>Google Pixel 8a surfaces in press renders ahead</p>
                <span>3 Minute Read</span>
              </div>
            </li>
            <li>
              <img src={img5} alt="Samsung Qualcomm" />
              <div className={classes.content}>
                <p>Samsung, Qualcomm & up to produce 20%</p>
                <span>3 Minute Read</span>
              </div>
            </li>
            <li>
              <img src={img5} alt="Slack AI Tools" />
              <div className={classes.content}>
                <p>Slack's AI tools are now available to all paying</p>
                <span>3 Minute Read</span>
              </div>
            </li>
          </ul>
        </div>

        <div className={classes.browsecategory}>
          <h3>Browse Category</h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Blockchain</li>
            <li>Gadgets</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
