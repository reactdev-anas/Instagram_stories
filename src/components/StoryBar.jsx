import React from 'react';

const StoryBar = ({ story,onClick}) => {
  return (
    <div className="flex flex-col items-center  justify-center w-20 h-35 snap-start">
      <img
        src={story.image}
        alt="story"
        className="w-20 h-20 mx-10 mb-3  rounded-full object-cover border-2 border-pink-500"
        onClick={onClick}
      />
       <span className="text-sm text-white mt-1 mb-3">{story.name}</span>
   
    </div>
  );
};

export default StoryBar;
