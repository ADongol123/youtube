import React from 'react';
import "../component_css/Searchpage.css"
import TuneOutlined from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return <div className='searchPage'> 
    <div className='searchPage__filter'>
        <TuneOutlined/>
        <h2>FILTER</h2>
       
    </div>
    <hr/>
    <ChannelRow
        image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        channel="Aayush Dongol"
        verified
        subs="6k"
        noOfVideos={245}
        description="The Gangster, the Cop, the Devil (Korean: 악인전; Hanja: 惡人戰; RR: Ak-in-jeon) is a 2019 South Korean action thriller film directed by Lee Won-tae. The film stars Ma Dong-seok, Kim Mu-yeol and Kim Sung-kyu.[2][3][4]"
   />
   <hr/>
   <VideoRow
    views="1.1k"
    subs="450k"
    description="The Gangster, the Cop, the Devil (Korean: 악인전; Hanja: 惡人戰; RR: Ak-in-jeon) is a 2019 South Korean action thriller film directed by Lee Won-tae. The film stars Ma Dong-seok, Kim Mu-yeol and Kim Sung-kyu.[2][3][4]"
    timestamp="60 mins ago"
    channel="Aayush Dongol"
    title="The movie is realy good"
    image="https://upload.wikimedia.org/wikipedia/en/b/bf/The_Gangster%2C_The_Cop%2C_The_Devil.jpg"
   />
   <VideoRow
    views="1.1k"
    subs="450k"
    description="The Gangster, the Cop, the Devil (Korean: 악인전; Hanja: 惡人戰; RR: Ak-in-jeon) is a 2019 South Korean action thriller film directed by Lee Won-tae. The film stars Ma Dong-seok, Kim Mu-yeol and Kim Sung-kyu.[2][3][4]"
    timestamp="60 mins ago"
    channel="Aayush Dongol"
    title="The movie is realy good"
    image="https://upload.wikimedia.org/wikipedia/en/b/bf/The_Gangster%2C_The_Cop%2C_The_Devil.jpg"
   /><VideoRow
   views="1.1k"
   subs="450k"
   description="The Gangster, the Cop, the Devil (Korean: 악인전; Hanja: 惡人戰; RR: Ak-in-jeon) is a 2019 South Korean action thriller film directed by Lee Won-tae. The film stars Ma Dong-seok, Kim Mu-yeol and Kim Sung-kyu.[2][3][4]"
   timestamp="60 mins ago"
   channel="Aayush Dongol"
   title="The movie is realy good"
   image="https://upload.wikimedia.org/wikipedia/en/b/bf/The_Gangster%2C_The_Cop%2C_The_Devil.jpg"
  /><VideoRow
  views="1.1k"
  subs="450k"
  description="The Gangster, the Cop, the Devil (Korean: 악인전; Hanja: 惡人戰; RR: Ak-in-jeon) is a 2019 South Korean action thriller film directed by Lee Won-tae. The film stars Ma Dong-seok, Kim Mu-yeol and Kim Sung-kyu.[2][3][4]"
  timestamp="60 mins ago"
  channel="Aayush Dongol"
  title="The movie is realy good"
  image="https://upload.wikimedia.org/wikipedia/en/b/bf/The_Gangster%2C_The_Cop%2C_The_Devil.jpg"
 />
  </div>;
}

export default SearchPage;
