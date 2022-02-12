import React from 'react';
import "../component_css/Sidebar.css"
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore"
function Sidebar() {
  return <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow title="Trending" Icon={WhatshotIcon}/>
      <SidebarRow title="Subscription" Icon={SubscriptionIcon}/>
      <hr/>
      <SidebarRow title="Library" Icon={VideoLibraryIcon}/>
      <SidebarRow title="History" Icon={HistoryIcon}/>
      <SidebarRow title="Your Videos" Icon={OndemandVideoIcon}/>
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon}/>
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon}/>
      <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon}/>
      <hr/>
  </div>;
}

export default Sidebar;
