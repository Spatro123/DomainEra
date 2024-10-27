import React from 'react';
import classes from './Disputes.module.css';
import disputeImage1 from './photo.png';  // Placeholder image
import disputeImage2 from './news2.jpg';  // Placeholder image
import Worldscomponent from './WorldsComponent';

const Disputes = () => {
  return (
    <div className={classes.disputePage}>
      <h1>Domain Disputes</h1>
      
      {/* Main Content Section */}
      <section className={classes.content}>
        <p>
          Domain disputes arise when multiple parties claim ownership or rights over a particular domain name.
          This can involve trademark issues, ownership disputes, or cases of cybersquatting.
        </p>
        <div className={classes.images}>
          <img src={disputeImage1} alt="Dispute Image 1" />
          <img src={disputeImage2} alt="Dispute Image 2" />
        </div>
        <h2>How Domain Disputes are Resolved</h2>
        <p>
          Domain disputes are often resolved through mechanisms such as UDRP (Uniform Domain-Name Dispute-Resolution Policy),
          WIPO arbitration, or court litigation, depending on the severity and context of the dispute.
        </p>
      </section>

      {/* News Section */}
      <section className={classes.newsSection}>
        <div className={classes.newsItem}>
          <div className={classes.date}>AUG 10</div>
          <div className={classes.newsContent}>
            <h3>Avoid Spam Risks, Don’t Choose Cheap TLDs - DomainFreaks</h3>
            <p>
              Google has confirmed that keywords in a top-level domain (TLD) do not give any advantage or
              disadvantage in search. This means that having a keyword in your domain name, such as "grocery.com" 
              for a grocery store, will not help you rank higher for searches on the word "grocery." So avoid cheap TLDs. 
              They attract spammers, which impacts search rankings. Consider branding and marketing, not just SEO, when 
              choosing a TLD.
            </p>
          </div>
        </div>

        <div className={classes.newsItem}>
          <div className={classes.date}>AUG 2</div>
          <div className={classes.newsContent}>
            <h3>Renew or buy your .com domain soon! Prices are going up.</h3>
            <p>
              The wholesale price of .com domains has been increasing by 7% each year since 2020. This is due to an 
              agreement between Verisign, the registry for .com domains, and ICANN, the international organization that 
              oversees the internet's domain name system. The agreement allows Verisign to increase prices by 7% each 
              year for four years, after which the price will be frozen for two years.
            </p>
          </div>
        </div>

        <div className={classes.newsItem}>
          <div className={classes.date}>JUL 26</div>
          <div className={classes.newsContent}>
            <h3>GEO Domains Explained - DomainFreaks</h3>
            <p>
              GEO domains is a domain name that is an exact match for a geographic location, such as a city, state, 
              country, or continent. For example, the domain name Mumbai.com is a GEO domain because it is an exact 
              match for the city of Mumbai.
            </p>
            <p>
              GEO domains are valuable because they are easy to remember and they can help businesses to target specific 
              geographic markets.
            </p>
          </div>
        </div>

        <div className={classes.newsItem}>
          <div className={classes.date}>JUL 20</div>
          <div className={classes.newsContent}>
            <h3>Root Zone Database - Details about top-level domains</h3>
            <p>
              The Root Zone Database represents the delegation details of top-level domains, including gTLDs such as 
              .com, and country-code TLDs such as .in. As the manager of the DNS root zone, IANA is responsible for 
              coordinating these delegations in accordance with the policies and procedures.
            </p>
          </div>
        </div>

        <div className={classes.newsItem}>
          <div className={classes.date}>JUL 18</div>
          <div className={classes.newsContent}>
            <h3>Top 50 Domain Registrars Across the World</h3>
            <p>
              Here is a list of the top 50 domain registrars across the world;
              GoDaddy.com, LLC, Tucows Domains Inc, eNom, Inc, NameCheap, Inc, and many more.
            </p>
          </div>
        </div>
      </section>
      <Worldscomponent />
    </div>
  );
};

export default Disputes;
