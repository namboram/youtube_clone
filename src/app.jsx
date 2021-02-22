import React, {useState, useEffect} from 'react';
import './app.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

function App() {
const [videos , setVideos] = useState([]);

const search = (query) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDPaWCVJ600ulq-FjMm85WkcBbTAb026BU`, requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
    .then(items => setVideos(items))
    .catch(error => console.log('error', error));

}

useEffect(()=>{
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDPaWCVJ600ulq-FjMm85WkcBbTAb026BU", requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
}, []);

  

  return (
    <>
          <Header onSearch={search} />
          <VideoList 
            videos={videos}
          />
    </>      
          );

}

export default App;
