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
    readTime: '2 min read'
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
            <h2>Lenovo’s smarter devices stoke professional passions</h2>
            <div className={classes.author}>
              <img
                src={author}
                alt="author"
                className={classes.authorImage}
              />
              <div className={classes.authorDetails}>
                <p>Foulcher Nathanil</p>
                <p>May 20, 2021</p>
              </div>
            </div>
            <div className={classes.interactions}>
              <span>❤️ 34</span>
              <span>💬 110</span>
              <span>🔖</span>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={photo}
              alt="Books on a beach"
              className={classes.mainImage}
            />
          </div>
        </div>

      </div>

      <Authors />
      <App />
    </div>
  );
};

export default EditorPickPage;
