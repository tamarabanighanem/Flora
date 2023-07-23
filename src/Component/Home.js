import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Albums from './Albums';
import Post from './Posts';
import PostForm from './PostForm';
const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    // Check if there is user data in local storage
    const userData = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(!!userData); // If userData exists, set isLoggedIn to true, otherwise set it to false
  }, []);

  return (
    
<div>
<section
        className="relative bg-[url(https://images.unsplash.com/photo-1592295988006-0d3f7b1eb0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-white/50 sm:bg-transparent sm:from-white/95 sm:to-white/25 bg-gradient-to-r"></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl  sm:text-5xl nameweb">
Flora       </h1>
      
      

    

      <div class="mt-8 flex flex-wrap gap-4 text-center">
      <Link to="/signIn"
          class="block w-full rounded bg-fuchsia-600 px-12 py-3  font-medium text-xl text-white shadow hover:bg-fuchsia-200 hover:text-fuchsia-800 focus:outline-none focus:ring active:bg-fuchsia-200 sm:w-auto"
        >
        Let's Start
        </Link>

      
      </div>
    </div>
  </div>
</section>
<section className="bg-fuchsia-50 dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        We didn't reinvent the wheel
      </h2>
      <p className="mb-4">
        We are strategists, designers and developers. Innovators and problem
        solvers. Small enough to be simple and quick, but big enough to deliver
        the scope you want at the pace you need. Small enough to be simple and
        quick, but big enough to deliver the scope you want at the pace you
        need.
      </p>
      <p>
        We are strategists, designers and developers. Innovators and problem
        solvers. Small enough to be simple and quick.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img
        className="w-full rounded-lg"
        src="https://images.unsplash.com/photo-1577096684001-185753009cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlciUyMHB1cnBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="office content 1"
      />
      <img
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="https://images.unsplash.com/photo-1618944728173-a9c13c562e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMHB1cnBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="office content 2"
      />
    </div>
  </div>
</section>

  <Albums/>
  <div  className="container mx-auto  flex justify-center items-center ">
        <div className=" py-16 w-full">
        <div className=" relative flex items-center justify-center">
      <img
        src=" https://images.unsplash.com/photo-1526509813677-4d4f89aa6f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="dining"
        className="w-full  h-full absolute  "
      />
  
      <div className="bg-black bg-opacity-50  lg:py-36 py-60 md:px-20 px-10 sm:px-4 flex flex-col items-center justify-center relative z-50">
        <h1 className="text-4xl font-semibold leading-9 text-white text-center">
        We are strategists, designers and developers.       </h1>
        <p className="text-base leading-normal text-center text-white border-l-2 mt-6">
        solvers. Small enough to be simple and quick, but big enough to deliver
        the scope you want at the pace you need. Small enough to be simple and
        quick, but big enough to deliver the scope you want at the pace you
        need.solvers. Small enough to be simple and quick, but big enough to deliver
        the scope you want at the pace you need. Small enough to be simple and
        quick, but big enough to deliver the scope you want at the pace you
        need.solvers. Small enough to be simple and quick, but big enough to deliver
        the scope you want at the pace you need. Small enough to be simple and
        quick, but big enough to deliver the scope you want at the pace you
        need.
        
        </p>
      </div>
    </div>
  </div>
</div>
  <Post
  refresh = {refresh}
  />
  {isLoggedIn && <PostForm 
  setrefresh = {setRefresh}
  refresh={refresh}
  />} {/* Display PostForm only when the user is logged in */}
</div>
  )
}

export default Home
