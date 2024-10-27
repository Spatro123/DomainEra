import React from 'react';
import classes from './App.module.css';
import ArticleCard from './ArticleCard';
import SmallArticleCard from './SmallArticleCard';
import img from './photo.png'; // Importing image

const App = () => {
  const articles = [
    {
      id: 1,
      
      img: img,
      title: "Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities",
      author: "Pillifant Vern",
      date: "May 20, 2021",
      likes: 34,
      comments: 110,
    },
    {
      id: 2,
     
      img: "img",
      title: "360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean",
      author: "Pillifant Vern",
      date: "May 20, 2021",
      likes: 34,
      comments: 110,
    },
   
  ];

  return (
    <div className={classes.container}>
      <header>
        <h1>Latest Articles <span role="img" aria-label="balloon">🎈</span></h1>
        <p>Discover the most outstanding articles in all topics of life.</p>
        <div className={classes.categories}>
          <button className={classes.active}>All Items</button>
          <button>AI</button>
          <button>Bitcoin</button>
          <button>Design</button>
          <button className={classes.viewAll}>View all →</button>
        </div>
      </header>

      <main>
        <div className={classes.mainarticle}>
          <ArticleCard article={articles[0]} />
        </div>

        <div className={classes.smallArticleList}>
          {articles.slice(1).map((article) => (
            <SmallArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
