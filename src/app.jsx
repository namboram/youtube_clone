import React, {useState, useEffect} from 'react';
import './app.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

function App({youtubeFetch}) {
const [videos , setVideos] = useState([]);

const search = (query) => {
  youtubeFetch.search(query)
  .then(videos => setVideos(videos));
}

useEffect(()=>{
  youtubeFetch.mostPopular()
  .then(videos => setVideos(videos));
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
