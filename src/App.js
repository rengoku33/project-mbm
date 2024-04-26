import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Community from "./components/community";
import Course from "./components/course";

function App() {
  return (
    <Router>
    <NavBar />
          <Routes>
            <Route index element={<Home />} />         
            <Route path='/about' element={<About />} />
            <Route path='/course' element={<Course />} />
            <Route path='/community' element={<Community />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
     </Router>
    
  )
}

export default App;
