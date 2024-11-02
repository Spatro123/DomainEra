import React from 'react';
import classes from './Disclaimer.module.css';

const Disclaimer = () => {
  return (
    <div className={classes.disclaimercontainer}>
      <h1>Disclaimer</h1>

      <section>
        <h2>About DomainEra.Net</h2>
        <p>
          DomainEra.Net is your one-stop solution for news and insights on domain names, cybersecurity, artificial intelligence, blockchain, and more. We deliver content that's free and informative, aiming to empower you with knowledge in today's dynamic tech landscape.
        </p>
      </section>

      <section>
        <h2>Supporting DomainEra.Net</h2>
        <p>
          Thank you for visiting DomainEra.Net! We appreciate your interest and support. While we're a growing publication, your feedback is valuable to us. We strive to provide accurate information, but if you encounter any errors, please let us know so we can improve.
        </p>
      </section>

      <section>
        <h2>Terms of Use</h2>
        <p>
          Welcome to DomainEra.Net! By using our website, you agree to our Terms of Use. We encourage respectful and constructive comments. Spam, advertising, and content spoilers will be removed.
        </p>
      </section>

      <section>
        <h2>Copyright Policy</h2>
        <p>
          DomainEra.Net respects intellectual property rights. We quote and link to external sources under the "fair use" doctrine. We do not claim ownership of any brand materials, logos, or images unless explicitly stated. We embed videos from third-party platforms and are not responsible for their copyright compliance. For further information on our sources, please contact us.
        </p>
      </section>

      <section>
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. We will never share or sell your information with any third parties. All user data remains confidential.
        </p>
      </section>

      <section>
        <h2>Changes to DomainEra.Net</h2>
        <p>
          DomainEra.Net reserves the right to update its website, discontinue operations, or modify these policies at any time. We will endeavor to provide reasonable notice for significant changes.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          We welcome your feedback! Feel free to reach out through email, Instagram message, or any other preferred method. We value your communication and will keep your information confidential.
        </p>
      </section>

      <section>
        <h2>Thank You!</h2>
        <p>
          We appreciate your time and support. We are committed to providing a valuable resource for the tech-savvy community. Keep coming back for more insightful content on DomainEra.Net!
        </p>
      </section>
    </div>
  );
};

export default Disclaimer;
