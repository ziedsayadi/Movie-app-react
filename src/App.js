import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./Components/MovieList";


function App() {
  return (
    <div className="Bigcontainer">
      <div className="movi-cont">
      <MovieList />
      
      </div>      
    </div>
  );
}

export default App;
