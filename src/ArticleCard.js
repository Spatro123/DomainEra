import React from 'react';
import classes from './ArticleCard.module.css';
import img from './photo1.png'
import img1 from './boy.png';

const ArticleCard = ({ article }) => {
  return (
    <div className={classes.articlecard}>
      <div className={classes.articlecategory}>{article.category}</div>
      <img src={img} alt={article.title} className={classes.articleimage} />
      <div className={classes.articlecontent}>
        <div className={classes.articleauthor}>
          <img src={img1} alt={article.author} className={classes.authorimg} />
          <div>
            <p>{article.author}</p>
            <p>{article.date}</p>
          </div>
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div className={classes.articlestats}>
          <span>❤️ {article.likes}</span>
          <span>💬 {article.comments}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
