import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Photo from './Component/Photo';
import Post from './Component/Post';
import SignIn from './Component/SignIn';
import Profile from './Component/Profile';
import PostForm from './Component/PostForm';
import ContactUs from './Component/ContactUs';
import About from './Component/About';
function App() {
  const [isLog, setIsLog] = useState(false)

  return (
    <Router>
      <Nav isLog={isLog} updateIsLog={setIsLog} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo/:id" element={<Photo />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/postForm' element={<PostForm/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/signIn" element={<SignIn updateIsLog={setIsLog}/>} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

