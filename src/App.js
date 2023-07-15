
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact';
import DrawerAppBar from './components/mui/appbar';
import About from './pages/About';
import Service from './pages/Services'
import Study from './pages/Study'
import Blog from './pages/Blog'
import Careers from './pages/Careers';
import Job from './pages/Job'

function App() {
  return (
   <>
   

  
    <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route path="" element={<Home />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="case-study" element={<Study />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="job" element={<Job />} />
        </Route>
      </Routes>



   </>
  );
}

export default App;
