import React, { useState } from 'react';

const Banar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div
  className="hero min-h-screen bg-gray-200"
  style={{
    backgroundImage:
      "url(https://i.postimg.cc/02pPckXy/Mask-group.png)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="hero-content text-gray-800 text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Awesome UI Dark Template for Webflow Agency</h1>
      
      <button className="btn bg-black text-white">Get Started</button>
    </div>
  </div>
</div>
    
    </>
  );
};

export default Banar;