import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';  
import BlogPage from './BlogPage';
import Poster from './poster';
import NewsBlogPage from './NewsBlogPage';
import BlockchainNewsPage from './BlockchainNewsPage';
import Authors from './Authors';
import Footer from './Footer';
import ArticleCard from './ArticleCard';
import SmallArticleCard from './SmallArticleCard';
import ArticleCardnew from './ArticleCardnew';
import Article from './Article';
import Disputes from './Disputes';
import WorldComponent from './WorldsComponent';
import Ai from './Ai';
import Aisection2 from './Aisection2';
import Startup from './Startup'; // Importing the Startup component
import Startuppage from './Stratuppage2';
import Security from './Security';
import Securitypage2 from './securitypage2';
import Contactus from './Contactus';
import PrivacyPolicy from './PrivacyPolicy';
import Disclaimer from './Disclaimer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/news" element={<NewsBlogPage />} />
        <Route path="/blockchain" element={<BlockchainNewsPage />} />
        <Route path="/author" element={<Authors />} />
        <Route path="/app" element={<App />} />
        <Route path="/articlecard" element={<ArticleCard />} />
        <Route path="/smallarticlecard" element={<SmallArticleCard />} />
        <Route path="/articlecardnew" element={<ArticleCardnew />} />
        <Route path="/article" element={<Article />} />
        <Route path="/disputes" element={<Disputes />} /> 
        <Route path="/worldcomponent" element={<WorldComponent />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/aisection2" element={<Aisection2 />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/startuppage" element={<Startuppage />} />
        <Route path="/security" element={<Security />} />
        <Route path="/securitypage2" element={<Securitypage2 />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
