import React, { useEffect, useState } from 'react';
import { getStories } from '../services/api';
import { Link } from 'react-router-dom';

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories();
      setStories(data);
    };

    fetchStories();
  }, []);

  return (
    <div>
      <h2>Story Library</h2>
      <ul>
        {stories.map(story => (
          <li key={story._id}>
            <Link to={`/story/${story._id}`}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryList;
