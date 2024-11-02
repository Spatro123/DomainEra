import React from 'react';
import classes from './Authors.module.css';
import author from './boy.png';  
import img from './p.jpg';
import img1 from './p1.jpg';
import img2 from './p2.jpg';
import img3 from './p3.jpg';

const authors = [
  { id: 1, name: 'Truelock Alric', job: 'Author Job', score: 40, profileLink: 'https://example.com/author/truelock-alric' },
  { id: 2, name: 'Birrell Chariot', job: 'Author Job', score: 113, profileLink: 'https://example.com/author/birrell-chariot' },
  { id: 3, name: 'Foulcher Nathanil', job: 'Author Job', score: 43, profileLink: 'https://example.com/author/foulcher-nathanil' },
  { id: 4, name: 'Falconar Agnes', job: 'Author Job', score: 36, profileLink: 'https://example.com/author/falconar-agnes' },
];

const backgroundImages = [img, img1, img2, img3];

const Authors = () => {
  return (
    <div className={classes.authorscontainer}>
      <h2>Newest authors</h2>
      <p>Say hello to future creator potentials</p>
      <div className={classes.authorsgrid}>
        {authors.map((authorData, index) => (
          <a href={authorData.profileLink} target="_blank" rel="noopener noreferrer" key={authorData.id} className={classes.authorcard}>
            <div
              className={classes.authorcardheader}
              style={{
                backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,  
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50%',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
              }}
            >
              <span>{authorData.score}</span>
              <img src={author} alt={authorData.name} className={classes.authorimg} />
            </div>
            <div className={classes.authorcardbody}>
              <h3>{authorData.name}</h3>
              <p>@{authorData.job}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Authors;
