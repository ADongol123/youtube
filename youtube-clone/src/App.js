import './App.css';
import Header from './component/Header';
import RecommendedVideos from './component/RecommendedVideos';
import Sidebar from './component/Sidebar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Search from './pages/Search';
function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
        <Route path="/search/:searchTerm" element={<Search/>}/>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
