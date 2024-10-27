import React from 'react';
import classes from './BlogPage.module.css';
import img1 from './img1.jpg';
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
            { img: img1, title: "Politics", date: "July 1, 2020", views: 7, desc: "More than half of businesses that closed during the pandemic won’t reopen" },
            { img: img2, title: "Technology", date: "July 5, 2020", views: 12, desc: "New AI technologies reshaping industries" },
            { img: img3, title: "Environment", date: "July 10, 2020", views: 15, desc: "The impact of climate change on global agriculture" }
          ].map((post, index) => (
            <div className={classes.featuredpost} key={index}>
              <a href={`/${post.title.toLowerCase()}`} className={classes.imageContainer}>
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
            { img: pic1, title: "The Smart Business Recovery", date: "September 12, 2018" },
            { img: pic2, title: "Why the US economy won’t gain any traction until 2024", date: "August 17, 2013" },
            { img: pic3, title: "Smart sensors could track social distancing in the office", date: "November 3, 2019" },
            { img: pic4, title: "All 30 million British homes could be powered by...", date: "November 3, 2016" }
          ].map((post, index) => (
            <div className={classes.popularpost} key={index}>
              <div className={classes.overlay}>{index + 1}</div>
              <img src={post.img} alt={post.title} />
              <div className={classes.text}>
                <p>{post.title}</p>
                <p>{post.date}</p>
              </div>
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
              <p>About 60% of businesses that have closed during the coronavirus pandemic will never reopen, and restaurants have suffered the most, according to new data from Yelp.</p>
              <a href="#" className={classes.readMore}>Read More→</a>
            </div>

            <section className={classes.latestnews}>
              <h3>Latest News</h3>
              <img src={leftimg} alt="Latest News" className={classes.featuredImage} />
              <article className={classes.newspost}>
                <h4>In China, Heavy Industry Unexpectedly Falls Sharply</h4>
                <p>August 15, 2019 • One Comment • Views: 4</p>
                <p>At that I gripped my wife’s arm, and without ceremony ran her out into the road...</p>
              </article>
            </section>
          </div>

          <div className={classes.centerColumn}>
            {[
              { title: "All 30 million British homes could be powered by wind in 2030", img: img1, date: "November 3, 2016" },
              { title: "These farmers say their cows can solve the climate crisis", img: centreimg, date: "July 25, 2018" }
            ].map((article, index) => (
              <article className={classes.featuredarticle} key={index}>
                <h3>{article.title}</h3>
                <img src={article.img} alt={article.title} className={classes.featuredImage1} />
                <p>{article.date} • Views: 5</p>
                <a href="#" className={classes.readMore}>Read More→</a>
              </article>
            ))}
          </div>

          <div className={classes.rightSide}>
            <h3>Inside Politics</h3>
            {[
              { img: rightimg1, text: "Small farmers could lose jobs, livelihoods amid tough competition from overseas" },
              { img: rightimg2, text: "Credit scores hit a record high. But US consumers are not OK" },
              { img: rightimg3, text: "Why investors shouldn’t count on another big stimulus package" },
              // { img: rightimg4, text: "The Unsinkable Daryline Johnson" }
            ].map((article, index) => (
              <div className={classes.rightArticle} key={index}>
                <img src={article.img} alt="Right Side Article" />
                <p>{article.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Poster />
      {/* New Section: Recent Comments */}
      {/* <section className={classes.recentComments}>
        <h2>Recent Comments</h2>
        <div className={classes.commentsContainer}>
          {[
            { name: "John Doe", comment: "This article was very informative! Thanks for sharing.", date: "October 20, 2024" },
            { name: "Jane Smith", comment: "I completely agree with the points made here.", date: "October 19, 2024" },
            { name: "Emily Johnson", comment: "Looking forward to more articles like this!", date: "October 18, 2024" }
          ].map((comment, index) => (
            <div className={classes.comment} key={index}>
              <h4>{comment.name}</h4>
              <p>{comment.comment}</p>
              <p className={classes.commentDate}>{comment.date}</p>
            </div>
          ))}
        </div>
      </section> */}
<NewsBlogPage />
    </div>
  );
};

export default BlogPage;
