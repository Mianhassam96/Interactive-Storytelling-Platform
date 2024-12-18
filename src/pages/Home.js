import React from 'react';
import './Home.scss'; // Ensure the styles are applied

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MultiMian's Storytelling Platform</h1>
          <p>Where creativity meets storytelling. Explore, create, and share amazing stories!</p>
          <a href="/browse" className="btn hero-btn">Start Browsing Stories</a>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features">
        <h2>Why Join Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Create Your Own Story</h3>
            <p>Share your creative journey with the world!</p>
          </div>
          <div className="feature-card">
            <h3>Browse Inspiring Stories</h3>
            <p>Get inspired by stories from other users.</p>
          </div>
          <div className="feature-card">
            <h3>Connect With Like-Minded Creators</h3>
            <p>Join a community of storytellers and collaborate.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 MultiMian - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
