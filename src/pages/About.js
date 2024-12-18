import React from 'react';
import './About.scss'; // Ensure the SCSS file name is correct

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1>Welcome to MultiMian StoryTeller</h1>
        <p>Your platform for creating and sharing stories with the world.</p>
      </section>

      <section className="about-content">
        <h2>What is StoryTeller?</h2>
        <p>
          StoryTeller is a platform designed to help individuals share their creativity with the world. Whether it's through fiction, personal stories, or creative writing, we provide an interactive and engaging environment for both story creators and readers.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to foster a community of storytellers, providing tools for easy creation, sharing, and interaction. We aim to bring stories to life and connect readers with the authors in a meaningful way.
        </p>
      </section>

      <section className="features-section">
        <h3>Why Choose Us?</h3>
        <div className="feature">
          <h4>Create and Share Stories Easily</h4>
          <p>Our simple interface makes it easy to create and share your stories with the world.</p>
        </div>
        <div className="feature">
          <h4>Engage with Readers</h4>
          <p>Interact with your readers, gather feedback, and improve your stories.</p>
        </div>
        <div className="feature">
          <h4>Join a Community</h4>
          <p>Become part of a growing community of storytellers and readers.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
