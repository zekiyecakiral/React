import React from 'react';
import './App.css';
import Friend from './NewFriend'
import DogGallery from './DogPhotoGallery';
import RandomJoke from './JokeGenerator'

function App() {
  return (
    <div className="App">

      <Friend/>
      <DogGallery/>
      <RandomJoke/>
    </div>
  );
}

export default App;