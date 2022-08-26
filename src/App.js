import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Page from "./Pages/Page"
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
