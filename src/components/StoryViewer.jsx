import React, { useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
const StoryViewer = ({ story, onClose, onNext, onPrev, isFirst, isLast }) => {

    
    useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLast) {
        onNext();
      } else {
        onClose();
      }
    }, 4000); // 5 seconds

    return () => clearTimeout(timer);
  }, [story]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-4 text-white text-xl"
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={story?.image}
        
        className="w-96 h-full object-cover m-6 rounded-lg border-4 "
      />

      {/* Name */}
      <p className="text-white absolute top-6 left-6 text-xl mt-4">{story?.name}</p>

      {/* Controls */}
      <div >
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="bg-white text-xl absolute top-74 left-5 text-black px-4 py-2 rounded "
        >
       <RiArrowLeftSLine />
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className="bg-white text-xl absolute top-74 right-5 text-black px-4 py-2 rounded disabled:opacity-30"
        >
      <RiArrowRightSLine/>
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
