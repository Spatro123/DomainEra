import React from 'react';
import classes from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={classes.privacypolicycontainer}>
      <h1>Privacy Policy</h1>
      
      <section>
        <h2>Your Privacy at DomainEra.Net</h2>
        <p>
          At DomainEra.Net, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
        </p>
      </section>

      <section>
        <h2>What Information Do We Collect?</h2>
        <p>
          <strong>Cookies:</strong> We use temporary cookies to help our website function properly. These cookies do not contain any personal information about you. You can choose to disable cookies in your browser settings, but this may affect your browsing experience on our site.
        </p>
        <p>
          <strong>Contact Forms:</strong> When you use our contact forms, we may collect information you provide such as your name and email address (along with your IP address) to respond to your inquiry.
        </p>
      </section>

      <section>
        <h2>How Do We Use Your Information?</h2>
        <p>The information we collect is used solely to:</p>
        <ul>
          <li>Improve your browsing experience on our website.</li>
          <li>Respond to your inquiries through contact forms.</li>
        </ul>
        <p>We will never share or sell your information to any third-party companies.</p>
      </section>

      <section>
        <h2>How Do We Protect Your Information?</h2>
        <p>
          We implement industry-standard security measures to protect your information from unauthorized access, misuse, and alteration. While we strive for complete security, no website can guarantee it completely.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You can control the use of cookies by your browser settings. You can also choose not to use our contact forms if you are uncomfortable providing your information.
        </p>
      </section>

      <section>
        <h2>Changes to Our Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on this page.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, please contact us at: <a href="mailto:info@domainera.net">info@domainera.net</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
