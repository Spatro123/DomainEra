import React from 'react';
import classes from './BlockchainNewsPage.module.css';
import photo from './photo.png';  
import screenshot from './news.jpg';  
import newImage from './news2.jpg'; 
import Authors from './Authors';
import App from './App';
import ArticleCardnew from './ArticleCardnew';
import author from './boy.png';

const EditorPickPage = () => {
  const article = {
    images: [photo, screenshot, newImage],
    category: 'Industrial',
    title: 'Lenovo’s smarter devices stoke professional passions',
    author: 'Foulcher Nathanil',
    date: 'May 20, 2021',
    readTime: '2 min read',
    links: [
      "https://www.blockchain.com/blog/posts/its-time-to-ape-in-on-memecoins-with-blockchaincom",
      "https://blogs.oracle.com/blockchain/post/revolutionizing-manufacturing-with-blockchains"
    ]
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Editor's pick</h1>
        <p>Discover the most outstanding articles in all topics of life.</p>
      </div>

      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <div className={classes.card}>
            <span className={classes.tag}>Industrial</span>
            {/* Link the title to the first article URL */}
            <a href={article.links[0]} target="_blank" rel="noopener noreferrer">
              <h2>{article.title}</h2>
            </a>
            <div className={classes.author}>
              <img
                src={author}
                alt="author"
                className={classes.authorImage}
              />
              <div className={classes.authorDetails}>
                <p>{article.author}</p>
                <p>{article.date}</p>
              </div>
            </div>
            <div className={classes.interactions}>
              <span>❤️ 34</span>
              <span>💬 110</span>
              <span>🔖</span>
            </div>
          </div>
          <div className={classes.imageContainer}>
            {/* Link the image to the second article URL */}
            <a href={article.links[1]} target="_blank" rel="noopener noreferrer">
              <img
                src={photo}
                alt="Books on a beach"
                className={classes.mainImage}
              />
            </a>
          </div>
        </div>
      </div>

      <Authors />
      <App />
    </div>
  );
};

export default EditorPickPage;
