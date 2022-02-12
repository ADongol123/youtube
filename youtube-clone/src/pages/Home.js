import React from 'react';
import Header from '../component/Header';
import RecommendedVideos from '../component/RecommendedVideos';
import Sidebar from '../component/Sidebar';

function Home() {
  return <div className='home'>
          <div className='app__page'>
              <Sidebar/>
              <RecommendedVideos/>
          </div>
  </div>;
}

export default Home;
