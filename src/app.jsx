import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtubeFetch}) {
const [videos , setVideos] = useState([]);

const [selectedVideo , setSelectedVideo] = useState(null);

const selectVideo =(video) => {
  setSelectedVideo(video);

}

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
          <section className={styles.content}>
            {selectedVideo && (
                <div className={styles.detail}>
                  <VideoDetail video={selectedVideo}/>
                </div>
              )
              }
              <div className={styles.list}>
                <VideoList 
                  videos={videos}
                  onVideoClick={selectVideo}
                  display={selectedVideo ? 'list': 'grid'}
                />
              </div>
          </section>
    </>      
          );

}

export default App;
