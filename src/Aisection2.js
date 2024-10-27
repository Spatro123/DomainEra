import React from 'react';
import classes from './Aisection.module.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './photo.png'; 
import img7 from './photo1.png';
import img8 from './photo1.png'; 
import img9 from './photo2.png';
import Ai from './Ai';


const App = () => {
  const trendingArticles = [
    { title: "Women In AI: Anna Korhonen studies the Intersection", date: "14 Jan, 2024", author: "Elon Musk", img: img1 },
    { title: "EU could approve Apple's 'tap and go' payment proposal", date: "14 Jan, 2024", author: "Elon Musk", img: img2 },
    { title: "Building an Editor by Sharing Code Between Android", date: "14 Jan, 2024", author: "Elon Musk", img: img3 },
    { title: "Google merges Android and Hardware divisions to drive AI", date: "14 Jan, 2024", author: "Elon Musk", img: img4 },
  ];

  const techArticles = [
    { title: "Cloud Journeys: Jeff Barr on Inspiring Cloud Industry Leaders", author: "Elon Musk", readTime: "3 Minute Read", views: "1.9k views", img: img5 },
    { title: "How Can A Wellness Retreat Help Reconnect You", author: "Elon Musk", readTime: "3 Minute Read", views: "1.9k views", img: img1 },
    { title: "Two simple techniques to make your release process", author: "Elon Musk", readTime: "3 Minute Read", views: "1.9k views", img: img2 },
    { title: "How Can A Wellness Retreat Help Reconnect You", author: "Elon Musk", readTime: "3 Minute Read", views: "1.9k views", img: img3 },
    { title: "An Insight into the Future of Cloud Computing", author: "Elon Musk", readTime: "3 Minute Read", views: "1.5k views", img: img9 }, // New tech article
  ];

  const featurePosts = [
    {
      title: "Efficient Rules to Organize Your Working Relationship",
      author: "Dany",
      readTime: "3 Minute Read",
      views: "1.9k views",
      img: img4,
    },
    {
      title: "Harnessing AI for Business Growth",
      author: "Elon Musk",
      readTime: "3 Minute Read",
      views: "1.2k views",
      img: img6, // New feature post
    },
    {
      title: "Building a Sustainable Future with AI",
      author: "Dany",
      readTime: "3 Minute Read",
      views: "800 views",
      img: img7, // New feature post
    },
    {
      title: "AI in Education: Transforming Learning Experiences",
      author: "Elon Musk",
      readTime: "3 Minute Read",
      views: "950 views",
      img: img8, // New feature post
    },
  ];

  return (
    <div className={classes.appcontainer}>
      <section className={classes.section}>
        <h2 className={classes.sectiontitle}>Trending Now</h2>
        <div className={classes.trendingcontainer}>
          {trendingArticles.map((article, index) => (
            <div key={index} className={classes.trendingarticle}>
              <img src={article.img} alt={article.title} className={classes.articleimage} />
              <p className={classes.articleinfo}>BY {article.author} - {article.date}</p>
              <h3 className={classes.articletitle}>{article.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={classes.flexsection}>
        <div className={classes.technologycontainer}>
          <h2 className={classes.sectiontitle}>Technology</h2>
          <div className={classes.maintecharticle}>
            <h3 className={classes.articletitle}>{techArticles[0].title}</h3>
            <p className={classes.articleinfo}>BY {techArticles[0].author} | {techArticles[0].readTime} | {techArticles[0].views}</p>
            <img src={techArticles[0].img} alt={techArticles[0].title} className={classes.articleimage2} />
            <img src={img9} alt="Cloud Journeys Additional" className={classes.articleimage1} /> {/* New image under tech article */}
          </div>
          <div className={classes.othertecharticles}>
            {techArticles.slice(1).map((article, index) => (
              <div key={index} className={classes.techarticle}>
                <img src={article.img} alt={article.title} className={classes.articleimage1} />
                <h4 className={classes.smallarticletitle}>{article.title}</h4>
                <p className={classes.articleinfo}>{article.readTime} | {article.views}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Post */}
        <div className={classes.featurepost}>
          {featurePosts.map((post, index) => (
            <div key={index}>
              <img src={post.img} alt="Feature Post" className={classes.articleimage} />
              <p className={classes.articleinfo}>{post.readTime} | {post.views}</p>
              <h3 className={classes.articletitle}>{post.title}</h3>
              <p className={classes.articleinfo}>by {post.author}</p>
            </div>
          ))}
        </div>
      </section>
      <Ai />
    </div>
  );
};

export default App;
