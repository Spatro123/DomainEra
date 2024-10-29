import React, { useState } from 'react';
import classes from './Footer.module.css'; 
import instagram from './instagram (4).png';
import x from './social-media (3).png';
import linkedin from './linkedin (2).png';
import youtube from './youtube (1).png';
import skype from './skype.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.section}>
          <ul className={classes.links}>
          <h3>Important Links </h3>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className={`${classes.section} ${classes.social}`}>
          <h3>Follow Us</h3>
          <ul className={classes.socialIcons}>
            <li><a href="https://x.com/domain_era" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Facebook" />
            </a></li>
            <li><a href="https://www.instagram.com/domainera/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a></li>
            {/* <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a></li>
            <li><a href="https://domaineranet.blogspot.com/" target="_blank" rel="noopener noreferrer">
              <img src={skype} alt="Skype" />
            </a></li> */}
          </ul>
        </div>

        {/* <div className={classes.section}>
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:info@domainera.net">info@domainera.net</a></p>
          <p>Address: Duplex 37, Sailashreevihar, Bhubaneswar, 751021</p>
        </div> */}

        {/* <div className={classes.section}>
          <h3>Our Services</h3>
          <ul className={classes.services}>
            <li><a href="/services">Domain Management</a></li>
            <li><a href="/services">Blockchain Consulting</a></li>
            <li><a href="/services">AI Solutions</a></li>
            <li><a href="/services">Cybersecurity</a></li>
            <li><a href="/services">Startup Support</a></li>
          </ul>
        </div> */}

        <div className={classes.section}>
          <h3>Subscribe to our Newsletter</h3>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className={classes.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={classes.emailInput}
              />
              <button type="submit" className={classes.submitButton}>Submit</button>
            </form>
          ) : (
            <p className={classes.thankYouMessage}>Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
