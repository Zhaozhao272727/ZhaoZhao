import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bgImage from './assets/b612-moon.png';
import chainsBig from './assets/chains-small.png';
import starsRight from './assets/stars_right.png';


function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* 背景圖片 */}

      <img src={chainsBig} alt="chains" className="absolute animate-swing left-0 top-0 w-full z-10" />

      <img
  src={starsRight}
  alt="stars"
  className="absolute top-0 left-0 w-full h-full object-cover z-0 animate-twinkle"
/>
      <img
        src={bgImage}
        alt="B612"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 文字區塊 */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-white font-serif z-10 text-center">
``

        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-center px-4">
          您好！這裡是昭昭，歡迎來到 B612 小行星 🪐
        </h1>
        <p className="text-lg md:text-xl text-gray-100 text-center px-4">
          May all the beauty be blessed ✨
        </p>
      </div>




    </div>
  );
}

export default App;