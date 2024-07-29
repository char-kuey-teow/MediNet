import { useState } from 'react'
import Navbar from "./components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Edu from "./components/Edu";

function App() {
  return(
    <>
    <Router>
      {/* User Profile page */}
      <Navbar/>
      <Banner/>
      <Profile/>
      <Skills/>
      <Edu/>
    </Router>
    </>
  )
}

export default App;
