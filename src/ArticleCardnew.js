import React from 'react';
import classes from './Artclecardnew.module.css'
import ArticleCard from './ArticleCard';

const article = {
  category: 'Industrial',
  title: 'Lenovo’s smarter devices stoke professional passions',
  author: 'Foulcher Nathanil',
  date: 'May 20, 2021',
  readTime: '2 min read'
};

const EditorPickPage = () => {
  return (
    <div className={classes.container}>
      <ArticleCard article={article} />
      
    </div>
  );
};

export default EditorPickPage;
