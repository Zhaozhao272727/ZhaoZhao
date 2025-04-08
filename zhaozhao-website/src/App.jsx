import bgImage from './assets/b612-moon.png';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center font-serif text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        您好！這裡是昭昭，歡迎來到 B612 小行星 🌌
      </h1>
      <p className="text-lg md:text-xl text-gray-100 drop-shadow-md">
        May all the beauty be blessed ✨
      </p>
    </div>
  );
}

export default App;


