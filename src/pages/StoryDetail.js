// src/pages/StoryDetail.js
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StoryDetail.scss';

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Memoize the stories array to avoid unnecessary recalculations
  const stories = useMemo(() => [
    { id: 1, title: "The Adventure Begins", content: "Full story content goes here..." },
    { id: 2, title: "Mystery in the Forest", content: "Detective story content goes here..." },
    { id: 3, title: "Space Odyssey", content: "Space adventure content goes here..." },
    { id: 4, title: "The Last Escape", content: "Survival in a post-apocalyptic world..." },
  ], []);  // Empty dependency array means it will only be calculated once

  const [story, setStory] = useState(null);

  useEffect(() => {
    const selectedStory = stories.find(story => story.id === parseInt(id));
    if (selectedStory) {
      setStory(selectedStory);
    }
  }, [id, stories]);  // Now 'stories' is memoized

  return (
    <div className="story-detail-container">
      {story ? (
        <>
          <h1>{story.title}</h1>
          <p className="story-content">{story.content}</p>
          <button className="back-button" onClick={() => navigate(-1)}>Back to Browse</button>
        </>
      ) : (
        <p>Loading story...</p>
      )}
    </div>
  );
};

export default StoryDetail;
