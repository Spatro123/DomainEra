import React from 'react';
import classes from './NewsBlogPage.module.css';

function App() {
  const articles = [
    {
      title: "Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities",
      description: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
      category: "Electronics",
      author: "Pillifant Vern",
      date: "May 20, 2021",
    },
    {
      title: "360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean",
      description: "We’re an online magazine dedicated to covering the best in international product design.",
      category: "Electronics",
      author: "Pillifant Vern",
      date: "May 20, 2021",
    },
    {
      title: "To cool datacenter servers, Microsoft turns to boiling liquid",
      description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue.",
      category: "Industrial",
      author: "Fouchier Nathanil",
      date: "May 20, 2021",
    },
  ];

  const tags = ['Garden', 'Jewelry', 'Industrial', 'Tools', 'Automotive', 'Toys', 'Outdoors', 'Health', 'Electronics'];
  const trendingTopics = [
    { name: 'Electronics', count: 7 },
    { name: 'Industrial', count: 26 },
    { name: 'Health', count: 20 },
    { name: 'Toys', count: 22 },
    { name: 'Sports', count: 15 },
  ];
  const authors = ['Truelock Alric', 'Fouchier Nathanil'];

  return (
    <div className={classes.app}>
      <div className={classes.maincontent}>
        <h2>Latest Articles 🎈</h2>
        <p>Discover the most outstanding articles in all topics of life.</p>
        
        {articles.map((article, index) => (
          <div key={index} className={classes.articlecard}>
            <span className={`category ${article.category.toLowerCase()}`}>{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className={classes.articlefooter}>
              <span>{article.author} • {article.date}</span>
              <div className={classes.interactions}>
                <span>💖 34</span>
                <span>💬 110</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.sidebar}>
        <div className={classes.tagsidebar}>
          <h4>💡 More tags</h4>
          <div className={classes.tags}>
            {tags.map((tag) => (
              <span key={tag} className={classes.tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={classes.trendingtopics}>
          <h4>✨ Trending topic</h4>
          {trendingTopics.map((topic) => (
            <div key={topic.name} className={classes.topic}>
              <span>{topic.name}</span>
              <span>{topic.count} Articles</span>
            </div>
          ))}
        </div>

        <div className={classes.authors}>
          <h4>🧑 Discover Authors</h4>
          {authors.map((author) => (
            <div key={author} className={classes.author}>
              <span>{author}</span>
              <span>Author Job</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
