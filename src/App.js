import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/home/home';
import './App.css'
import RegisterForm from "./component/registerForm/registerform";
import SupportForm from "./component/supportModal/supportmodal";
import PicturePage from "./component/picturesPage/picturepage";
import ContactUs from "./component/contact/contact";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/support" element={<SupportForm />}/>
          <Route path="/pictures" element={<PicturePage/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
