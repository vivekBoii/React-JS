import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const fullname = ['vinod','thapa'];

const biodata = [1,...fullname,26,'male'];

console.log(first);

console.log(remaining);

var shooterGames =['call of duty','far Cry','resident evil'];

var[first, ...remaining]=shooterGames;

console.log(first);

console.log(remaining);
