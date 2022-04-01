// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./styles/antd-styling-changes.css"; // or 'antd/dist/antd.less'
import Home from "./pages/Home";
import Trends from "./pages/Trends";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trends-recommendations" element={<Trends />} />
        </Routes>
      </Router>
      {/* ref: https://reactrouter.com/docs/en/v6/upgrading/v5 */}
    </div>
  );
}

export default App;


// UI storyboards images folder: https://drive.google.com/drive/folders/1a-jLO1oE4nDlf3qUckyiHT8Zke7KVEgr?usp=sharing