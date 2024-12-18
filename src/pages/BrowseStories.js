import React, { useState, } from 'react';
import './BrowseStories.scss'; // Make sure to add styles

const BrowseStories = () => {
  // Sample stories data (you can replace this with real data from an API or database)
  const [stories] = useState([
    { id: 1, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle' },
    { id: 2, title: 'Moby Dick', author: 'Herman Melville' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 5, title: '1984', author: 'George Orwell' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter stories based on search term
  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-stories">
      <h1>Browse Stories</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a story..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="story-list">
        {filteredStories.length > 0 ? (
          filteredStories.map(story => (
            <div key={story.id} className="story-item">
              <h2>{story.title}</h2>
              <p>By {story.author}</p>
            </div>
          ))
        ) : (
          <p>No stories found</p>
        )}
      </div>
    </div>
  );
};

export default BrowseStories;
