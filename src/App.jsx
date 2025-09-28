import React, { useState } from 'react';
import './App.css'; // if needed
import stories from '../public/stories.json';
import StoryBar from './components/StoryBar';
import StoryViewer from './components/StoryViewer';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleStoryClick = (index) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  const handleNext = () => {
    if (activeIndex < stories.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="w-screen h-screen bg-black p-4">
      <div className="flex overflow-x-auto  space-x-4 snap-x snap-mandatory scrollbar-hide">
        {stories.map((story,index) => (
          <StoryBar story={story} key={story.id}  onClick={() => handleStoryClick(index)}/>
        ))}
      </div>

      {/* Story Viewer Modal */}
      {activeIndex !== null && (
        <StoryViewer
          story={stories[activeIndex]}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={activeIndex === 0}
          isLast={activeIndex === stories.length - 1}
        />
      )}

    </div>
  );
};

export default App;
