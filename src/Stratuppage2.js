import React from 'react';
import classes from './startuppage2.module.css'; 
import img from './img2.jpg';  // Update this image import path to the actual location of your image
import img1 from './img1.jpg'; // Add images for each news item
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img1.jpg';
import img7 from './img2.jpg';
import img8 from './img3.jpg';
import img9 from './img4.jpg';
import img10 from './img4.jpg';
import img11 from './img5.jpg';
import img12 from './img1.jpg';
import sidebarImg1 from './img1.jpg'; // New sidebar images
import sidebarImg2 from './img2.jpg';
import sidebarImg3 from './img3.jpg';
import sidebarImg4 from './img4.jpg';
import sidebarImg5 from './img5.jpg';
import sidebarImg6 from './img1.jpg';

const BlogPage = () => {
  return (
    <div className={classes.container}>
      {/* Main Content Section */}
      <section className={classes.maincontent}>
        {/* Existing Articles */}
        <article className={classes.article}>
          <img src={img} alt="Cloud Icon" />
          <div className={classes.articleinfo}>
            <h3>The Tools That Drive Users To Your App</h3>
            <p>
              Self-promotion is great, and there are multiple ways to implement it in business strategy...
            </p>
            <div className={classes.articlemeta}>
              <span>Tutorials</span>
              <span className={classes.metaitem}>🔥 64</span>
              <span className={classes.metaitem}>💬 0</span>
              <span className={classes.metaauthor}>Henry Jones</span>
              <span className={classes.metadate}>June 9, 2018</span>
            </div>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img} alt="Responsive Web Design" />
          <div className={classes.articleinfo}>
            <h3>A Few Words About Responsive Web Design</h3>
            <p>"Flexible" is probably the most appropriate word to describe responsive web design...</p>
            <div className={classes.articlemeta}>
              <span>Tutorials</span>
              <span className={classes.metaitem}>🔥 15</span>
              <span className={classes.metaitem}>💬 0</span>
              <span className={classes.metaauthor}>Henry Jones</span>
              <span className={classes.metadate}>June 7, 2018</span>
            </div>
          </div>
        </article>

        {/* New Articles Section */}
        <h2>Latest News</h2>
        <article className={classes.article}>
          <img src={img1} alt="Venture Capital Fund" />
          <div className={classes.articleinfo}>
            <h3>Union Cabinet approves Rs 1,000 crore Venture Capital fund for space sector startups</h3>
            <p>India's Union Cabinet has sanctioned a ₹1,000 crore fund aimed at promoting innovation in the space sector through venture capital.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img2} alt="Zomato Order Scheduling" />
          <div className={classes.articleinfo}>
            <h3>Deepinder Goyal-led Zomato launches 'order scheduling' feature for pre-planned deliveries</h3>
            <p>Zomato introduces a new feature allowing users to schedule food orders in advance, enhancing user convenience.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img3} alt="DPIIT and HCL Software" />
          <div className={classes.articleinfo}>
            <h3>DPIIT partners with HCL software to boost India's startup manufacturing ecosystem</h3>
            <p>The partnership aims to enhance the manufacturing capabilities of startups in India.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img4} alt="AquaExchange" />
          <div className={classes.articleinfo}>
            <h3>Aquaculture tech startup AquaExchange reports Rs 104 crore revenue in FY24; losses jump 92%</h3>
            <p>AquaExchange has reported a significant increase in revenue but also a concerning rise in losses.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img5} alt="Infosys Language Models" />
          <div className={classes.articleinfo}>
            <h3>Infosys unveils small language models built using the Nvidia AI stack</h3>
            <p>Infosys launches new AI models aimed at enhancing language processing capabilities.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img6} alt="Ixigo Acquisition" />
          <div className={classes.articleinfo}>
            <h3>Traveltech firm Ixigo is acquiring 51% stake in train food delivery app Zoop</h3>
            <p>Ixigo's acquisition aims to expand its service offerings in the travel sector.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img7} alt="Paan Funding" />
          <div className={classes.articleinfo}>
            <h3>The Paan Legacy, Hemptyful, and Polr.Care secure Rs 1 crore each from D2C Insider</h3>
            <p>Three innovative startups secure funding to enhance their market reach.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img8} alt="Khosla Ventures" />
          <div className={classes.articleinfo}>
            <h3>Khosla Ventures invests $20 million in Bengaluru-based Healthify</h3>
            <p>Healthify receives substantial investment to fuel its growth in the health tech space.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img9} alt="Mastercard Pune" />
          <div className={classes.articleinfo}>
            <h3>Mastercard opens one of its biggest tech centres globally in Pune, Maharashtra</h3>
            <p>Mastercard expands its operations in India with a new tech hub in Pune.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img10} alt="OYO Q2 FY25" />
          <div className={classes.articleinfo}>
            <h3>Ritesh Agarwal-led OYO made Rs 158 crore profit in Q2FY25, revenue stood at Rs 1,578 crore</h3>
            <p>OYO reports robust financial performance for Q2 FY25.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img11} alt="Swiggy 10-Minute Delivery" />
          <div className={classes.articleinfo}>
            <h3>Swiggy will now deliver food in just 10 minutes</h3>
            <p>Swiggy launches a speedy delivery service to cater to immediate food needs.</p>
          </div>
        </article>

        <article className={classes.article}>
          <img src={img12} alt="GenAI Startups" />
          <div className={classes.articleinfo}>
            <h3>Yotta Data Services partners with Sarvam AI to launch</h3>
            <p>Yotta collaborates with Sarvam AI to enhance data services in the AI domain.</p>
          </div>
        </article>
      </section>

      <aside className={classes.sidebar}>
        <div className={classes.popular}>
          <h3>Most Popular</h3>
          <div className={classes.popularitem}>
            <img src={sidebarImg1} alt="Popular Item 1" />
            <span>Free vector graphics for your web design projects</span>
          </div>
          <div className={classes.popularitem}>
            <img src={sidebarImg2} alt="Popular Item 2" />
            <span>Introduction to HTML5 and CSS3</span>
          </div>
          <div className={classes.popularitem}>
            <img src={sidebarImg3} alt="Popular Item 3" />
            <span>Advertising your products is a job for professionals</span>
          </div>
          <div className={classes.popularitem}>
            <img src={sidebarImg4} alt="Popular Item 4" />
            <span>How to make your website SEO-friendly</span>
          </div>
          <div className={classes.popularitem}>
            <img src={sidebarImg5} alt="Popular Item 5" />
            <span>Top 10 design trends for 2024</span>
          </div>
          <div className={classes.popularitem}>
            <img src={sidebarImg6} alt="Popular Item 6" />
            <span>How to increase user engagement on your website</span>
          </div>
        </div>

        <div className={classes.categories}>
          <h3>Categories</h3>
          <ul>
            <li>Tutorials</li>
            <li>Tech News</li>
            <li>Startups</li>
            <li>Web Development</li>
            <li>Design</li>
            <li>Business</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
