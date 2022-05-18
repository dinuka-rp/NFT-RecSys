// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./styles/antd-styling-changes.css"; // or 'antd/dist/antd.less'
import Home from "./pages/Home";
import TrendsManagementUser from "./pages/TrendsManagementUser";
import TrendsManagementAdmin from "./pages/TrendsManagementAdmin";
import BiasAdjusterUser from "./pages/BiasAdjusterUser";
import BiasAdjusterAdmin from "./pages/BiasAdjusterAdmin";
import GenerateByRef from "./pages/GenerateByRef";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trends-management" element={<TrendsManagementUser />} />
          <Route
            path="/admin/trends-management"
            element={<TrendsManagementAdmin />}
          />
          <Route path="/reference-rec" element={<GenerateByRef />} />
          {/* <Route
            path="/generated-recommendations"
            element={<GeneratedRecFeed />}
          /> */}
          <Route path="/personal-bias" element={<BiasAdjusterUser />} />
          <Route path="/admin/default-bias" element={<BiasAdjusterAdmin />} />
        </Routes>
      </Router>
      {/* ref: https://reactrouter.com/docs/en/v6/upgrading/v5 */}
    </div>
  );
}

export default App;

// UI storyboards images folder: https://drive.google.com/drive/folders/1a-jLO1oE4nDlf3qUckyiHT8Zke7KVEgr?usp=sharing
