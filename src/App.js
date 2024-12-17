import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Home from "./page/Home/Home";
import Search from "./page/Search/Search";
import Booking from "./page/Booking";
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="App">
      <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} maxSnack={3}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/Booking" element={<Booking/>} />
          </Routes>
        </Layout>
      </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
