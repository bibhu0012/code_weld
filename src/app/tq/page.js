import React from 'react';

const ImageDiv = () => {
  return (
    <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
      <img
        className="object-cover w-full h-full"
        src="thank you.webp"
        alt="Placeholder Image"
      />
    </div>
  );
};

export default ImageDiv;
