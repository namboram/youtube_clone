import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeFetch from './service/youtubeFetch';

const youtubeFetch = new YoutubeFetch(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtubeFetch={youtubeFetch}/>
  </React.StrictMode>,
  document.getElementById('root')
);

