import React from "react";
import classes from "./WorldComponent.module.css"; 
import img from './img1.jpg';
import img1 from './img2.jpg';
import img2 from './img3.jpg';
import img3 from './img4.jpg';
import img4 from './img5.jpg';
import instagram from './instagram (4).png';

const App = () => {
  const articles = [
    { title: "VR Headset Virtual Reality Glasses", date: "1 YEAR AGO", image: img },
    { title: "Essential Tech Tips for Your Business", date: "1 YEAR AGO", image: img1 },
    { title: "For Good Results Must Be Make Good Plan", date: "1 YEAR AGO", image: img2 },
    { title: "Make Your Gaming Setup Look Better", date: "1 YEAR AGO", image: img3 },
    { title: "Hot New Releases in Audio Headphones", date: "1 YEAR AGO", image: img4 },
  ];

  const images = [img, img1, img2, img3, img4];

  return (
    <div className={classes.appcontainer}>
      {/* Worlds Section */}
      <div className={classes.worldssection}>
        <h2>Worlds</h2>
        <div className={classes.articlescontainer}>
          {articles.map((article, index) => (
            <div key={index} className={classes.articlecard}>
              <img src={article.image} alt={article.title} />
              <h4>{article.title}</h4>
              <p>{`JOHN DOE • ${article.date}`}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid Section */}
      <div className={classes.imagegridsection}>
        <div className={classes.imagegrid}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Grid ${index}`} />
          ))}
        </div>
        <button className={classes.instagrambutton}>
          <img src={instagram} alt="Instagram" />
        </button>
      </div>

      {/* Footer Section */}
      <footer className={classes.footer}>
        <div className={classes.footercontent}>
          <div className={classes.footerlogo}>
            <h1>Atlas</h1>
            <p>
              I want to learn more about the greenhouse effect on Venus, 
              about whether there was life on Mars.
            </p>
            <p>📞 +34 000 0000</p>
            <p>📧 example@mail.me</p>
          </div>
          <div className={classes.footersections}>
            <div>
              <h3>Gadget</h3>
              <p>Hot New Releases in Audio Headphones</p>
              <p>Mobile Camera Makes a Huge Leap in Quality</p>
            </div>
            <div>
              <h3>World News</h3>
              <p>Essential Tech Tips for Your Business</p>
              <p>Make Your Gaming Setup Look Better</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
