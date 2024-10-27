import React from 'react';
import classes from './Artcle.module.css';
import ArticleCard from './ArticleCardnew';

const articles = [
  {
    title: "Lenovo’s smarter devices stoke professional passions",
    author: "Foulcher Nathanil",
    date: "May 20, 2021",
    readTime: "2 min read",
    category: "Industrial",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },
  {
    title: "How AI and Teams are benefiting the littlest of patients",
    author: "Falconar Agnes",
    date: "May 20, 2021",
    readTime: "5 min read",
    category: "Tools",
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
  },
  {
    title: "DIYer and TV host Trisha...",
    author: "Falconar Agnes",
    date: "May 20, 2021",
    category: "Tools",
    images: ["image7.jpg"],
  },
  {
    title: "New tools for Black pregnant...",
    author: "Tousy Vita",
    date: "May 20, 2021",
    category: "Automotive",
    images: ["image8.jpg"],
  },
  {
    title: "People who inspired us in 2019",
    author: "Fones Mimi",
    date: "May 20, 2021",
    category: "Industrial",
    images: ["image9.jpg"],
  },
  {
    title: "How architects visualize...",
    author: "Pillifant Vern",
    date: "May 20, 2021",
    category: "Electronics",
    images: ["image10.jpg"],
  }
];

function App() {
  return (
    <div className={classes.gallerypage}>
      <h2>Over 218 articles has gallery type</h2>
      <div className={classes.articlesgrid}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;
