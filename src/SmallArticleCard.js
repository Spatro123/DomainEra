import React from 'react';
import classes from'./SmallArticleCard.module.css';

const DecentralizedStorage = () => {
  return (
    <div className={classes.storagepage}>
      <header className={classes.header}>
        <h1>Filecoin (FIL) and Storacha Enhance Decentralized Hot Storage Solutions</h1>
        <p className={classes.author}>Zach Anderson | Aug 31, 2024 | 03:18</p>
      </header>

      <section className={classes.intro}>
        <p>
          Storacha partners with Filecoin (FIL) to revolutionize decentralized hot storage using 
          Proof of Data Possession (PDP), ensuring secure, accessible data with top-tier 
          availability and durability. Storacha is transforming decentralized hot storage by 
          integrating with Filecoin (FIL)'s innovative Proof of Data Possession (PDP) technology, 
          as reported by Filecoin. This collaboration aims to provide secure, accessible data with 
          exceptional availability and durability.
        </p>
      </section>

      <section className={classes.innovation}>
        <h2>How Storacha and Filecoin Are Innovating</h2>
        <p>
          Storacha is a significant data onboarder to the Filecoin network, uploading up to 10 
          terabytes of data daily. This data is stored in Filecoin's decentralized storage system, 
          ensuring it is always accessible and secure. By leveraging Filecoin's Proof of Replication 
          (PoRep), Storacha guarantees that each storage provider maintains a unique data copy, 
          ensuring data integrity and availability.
        </p>
      </section>

      <section className={classes.pdp}>
        <h2>Introducing Proof of Data Possession (PDP)</h2>
        <p>
          Filecoin's new Proof of Data Possession (PDP) technique allows Storacha to validate that 
          data is retrievable and ready for immediate access. PDP is designed to be less 
          resource-intensive and more flexible, enhancing the overall efficiency and reliability of 
          the storage network.
        </p>
      </section>

      <section className={classes.collaboration}>
        <h2>Collaborative Efforts for Enhanced Performance</h2>
        <p>
          Storacha is collaborating with key players in the Filecoin ecosystem to optimize its 
          storage solutions. Partnerships with FilOz, Curio, and the Filecoin Incentive Design Lab 
          (FIDL) aim to enhance core infrastructure, develop PDP, and integrate SPARK, a retrieval 
          testing program. These collaborations are crucial for ensuring seamless operations and 
          open-source contributions.
        </p>
      </section>
    </div>
  );
};

export default DecentralizedStorage;
