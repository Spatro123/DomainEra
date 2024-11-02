import React from 'react';
import classes from './BlogPage.module.css';
import img1 from './img5.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import Header from './Header';
import leftimg from './left.jpg';
import centreimg from './centr2.jpg';
import rightimg1 from './right1.jpg';
import rightimg2 from './right2.jpg';
import rightimg3 from './right3.jpg';
import rightimg4 from './right4.jpg';
import Poster from './poster';
import NewsBlogPage from './NewsBlogPage';

const BlogPage = () => {
  return (
    <div className={classes.blogcontainer}>
   
      <section className={classes.featuredsection}>
        <h2>Featured</h2>
        <div className={classes.featuredPostsContainer}>
          {[
            { img: img1, title: "Politics", date: "July 1, 2020", views: 7, desc: "More than half of businesses that closed during the pandemic won’t reopen", link: "https://www.deeprec.ai/blog?source=google.com" },
            { img: img2, title: "Technology", date: "July 5, 2020", views: 12, desc: "New AI technologies reshaping industries", link: "https://www.deeprec.ai/blog/2024/07/genais-rise-in-europe-growth-funding-and-challenges?source=google.com" },
            { img: img3, title: "Environment", date: "July 10, 2020", views: 15, desc: "The impact of climate change on global agriculture", link: "https://blockchaintechnology-news.com/" }
          ].map((post, index) => (
            <div className={classes.featuredpost} key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className={classes.imageContainer}>
                <img src={post.img} alt={post.title} className={classes.featuredimage} />
                <div className={classes.textOverlay}>
                  <h3>{post.title}</h3>
                  <p>{post.date} • Views: {post.views}</p>
                  <h4>{post.desc}</h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={classes.popularsection}>
        <h2>Popular this week</h2>
        <div className={classes.popularposts}>
          {[
            { img: pic1, title: "The Smart Business Recovery", date: "September 12, 2018", link: "https://blockchaintechnology-news.com/news/mint-blockchain-earns-grant-to-drive-nft-ecosystem-growth/" },
            { img: pic2, title: "Why the US economy won’t gain any traction until 2024", date: "August 17, 2013", link: "https://www.deeprec.ai/blog?source=google.com" },
            { img: pic3, title: "Smart sensors could track social distancing in the office", date: "November 3, 2019", link: "https://www.deeprec.ai/blog/2024/07/genais-rise-in-europe-growth-funding-and-challenges?source=google.com" },
            { img: pic4, title: "All 30 million British homes could be powered by...", date: "November 3, 2016", link: "https://blockchaintechnology-news.com/" }
          ].map((post, index) => (
            <div className={classes.popularpost} key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className={classes.overlay}>{index + 1}</div>
                <img src={post.img} alt={post.title} />
                <div className={classes.text}>
                  <p>{post.title}</p>
                  <p>{post.date}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={classes.morefeatured}>
        <h2>More Featured Articles</h2>
        <div className={classes.featuredContainer}>
          <div className={classes.leftSide}>
            <h3>Featured • Politics</h3>
            <div className={classes.featuredArticle}>
              <img src={leftimg} alt="Featured Article" className={classes.featuredImage} />
              <h4>More than half of businesses that closed during the pandemic won’t reopen</h4>
              <p>July 1, 2020 • Views: 8</p>
              <div className={classes.text}>About 60% of businesses that have closed during the coronavirus pandemic will never reopen, and restaurants have suffered the most, according to new data from Yelp.</div>
              <a href="https://www.deeprec.ai/blog?source=google.com" target="_blank" rel="noopener noreferrer" className={classes.readMore}>Read More→</a>
            </div>

            <section className={classes.latestnews}>
              <h3>Latest News</h3>
              <a href="https://www.deeprec.ai/blog/2024/07/genais-rise-in-europe-growth-funding-and-challenges?source=google.com" target="_blank" rel="noopener noreferrer">
                <img src={img1} alt="Latest News" className={classes.featuredImage} />
              </a>
              <article className={classes.newspost}>
                <h4>In China, Heavy Industry Unexpectedly Falls Sharply</h4>
                <p>Aug 15, 2019 • One Comment • Views: 4</p>
                <div className={classes.text}>At that I gripped my wife’s arm, and without ceremony ran her out into the road...</div>
              </article>
              <a href="https://blockchaintechnology-news.com/news/mint-blockchain-earns-grant-to-drive-nft-ecosystem-growth/" target="_blank" rel="noopener noreferrer" className={classes.readMore}>Read More→</a>
            </section>
          </div>

          <div className={classes.centerColumn}>
            {[
              { title: "All 30 million British homes could be powered by wind in 2030", img: img1, date: "November 3, 2016", link: "https://blockchaintechnology-news.com/" },
              { title: "These farmers say their cows can solve the climate crisis", img: centreimg, date: "July 25, 2018", link: "https://www.deeprec.ai/blog?source=google.com" }
            ].map((article, index) => (
              <article className={classes.featuredarticle} key={index}>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <h3>{article.title}</h3>
                  <img src={article.img} alt={article.title} className={classes.featuredImage1} />
                </a>
                <p>{article.date} • Views: 5</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className={classes.readMore}>Read More→</a>
              </article>
            ))}
          </div>

          <div className={classes.rightSide}>
            <h3>Inside Politics</h3>
            {[
              { img: rightimg1, text: "Small farmers could lose jobs, livelihoods amid tough competition from overseas", link: "https://blockchaintechnology-news.com/" },
              { img: rightimg2, text: "Credit scores hit a record high. But US consumers are not OK", link: "https://www.deeprec.ai/blog/2024/07/genais-rise-in-europe-growth-funding-and-challenges?source=google.com" },
              { img: rightimg3, text: "Why investors shouldn’t count on another big stimulus package", link: "https://blockchaintechnology-news.com/news/mint-blockchain-earns-grant-to-drive-nft-ecosystem-growth/" }
            ].map((article, index) => (
              <div className={classes.rightArticle} key={index}>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <img src={article.img} alt="Right Side Article" />
                  <p>{article.text}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Poster />
      <NewsBlogPage />
    </div>
  );
};

export default BlogPage;
