import React from 'react';

function Food() {
  return (
    <h3>I love { fav }</h3>
  )
}

function App() {
  return (
  <div>
    <h1>Hello!!!!!</h1>
    <Food fav="김치" />
    <Food fav="짜장면" />
    <Food fav="짬뽕" />
    <Food fav="만두" />
    <Food fav="피자" />
    <Food fav="치킨" />
  </div>
  );
}

export default App;
