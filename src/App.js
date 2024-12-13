import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Home from "./page/Home/Home";
import Search from "./page/Search";
import Booking from "./page/Booking";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/Booking" element={<Booking/>} />
          </Routes>
        </Layout>
      </Router>
      
    </div>
  );
}

export default App;
