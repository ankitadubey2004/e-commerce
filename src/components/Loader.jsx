import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4"
        style={{ borderColor: '#8F8578 transparent #8F8578 transparent' }}
      ></div>
    </div>
  );
};

export default Loader;
