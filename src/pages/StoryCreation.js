import React, { useState } from 'react';
import './StoryCreation.scss'; // Ensure SCSS styling is set up

const StoryCreation = () => {
  const [story, setStory] = useState({
    title: '',
    description: '',
    content: '',
    image: null,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStory({
      ...story,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setStory({
      ...story,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!story.title || !story.description || !story.content) {
      setError('All fields are required.');
      setSuccess(false);
      return;
    }

    // Simulate a successful story submission
    console.log('Story Submitted:', story);
    setSuccess(true);
    setError('');

    // Reset form
    setStory({
      title: '',
      description: '',
      content: '',
      image: null,
    });
  };

  return (
    <div className="story-creation">
      <h1>Create a New Story</h1>
      <form onSubmit={handleSubmit} className="story-form">
        <div className="form-group">
          <label htmlFor="title">Story Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={story.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Story Description</label>
          <textarea
            id="description"
            name="description"
            value={story.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Story Content</label>
          <textarea
            id="content"
            name="content"
            value={story.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Cover Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit Story</button>
      </form>

      {/* Display Error or Success Message */}
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Story Submitted Successfully!</div>}
    </div>
  );
};

export default StoryCreation;
