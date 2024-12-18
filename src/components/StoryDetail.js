import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStoryById } from '../services/api';

const StoryDetail = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      const data = await getStoryById(storyId);
      setStory(data);
    };

    fetchStory();
  }, [storyId]);

  if (!story) return <div>Loading...</div>;

  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <div>
        {story.branches.map(branch => (
          <div key={branch.branchId}>
            <p>{branch.content}</p>
            <ul>
              {branch.choices.map((choice, index) => (
                <li key={index}>
                  <button>{choice.choiceText}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryDetail;
