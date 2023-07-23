import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";


export default function SignIn() {
  const [userData,setUserdata]=useState("")
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // Fetch posts data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUserdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      
      });
  }, []);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    
  userData.map((user) => {
    if(user.email===email && user.email===password){
      localStorage.setItem('user',JSON.stringify(user))
      navigate('/')
      window.location.reload();
      return;
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="#">Why do I have this issue?</a>'
      })
   }
  
  })
  
  }

  return (
    <div class="min-h-screen bg-white text-gray-900 flex justify-center">
      <div class=" sm:m-20 bg-white shadow sm:rounded-lg flex">
        <div class=" bg-white text-center hidden lg:flex">
          <div class="bg-contain bg-center bg-no-repeat">
            <img  className='w-full h-full' src='https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'/>
          </div>
        </div>
        <div class="lg:w-1/2 p-6 sm:p-12 sm:w-10/12">
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl text-fuchsia-600 ">
              Sign in your account
            </h1>
            <div class="w-full flex-1 mt-8">
              <div class="my-12 border-b text-center">
              </div>
              <form onSubmit={(event) => handleSubmit(event)}>
                <input type='email'placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} className='border m-5 p-3' ></input>
                <br/>
                <input type='password'placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} className='border m-5 p-3' ></input>
                <button type='submit'
                    class="mt-5 tracking-wide font-semibold bg-fuchsia-600 text-gray-100 w-24  py-2 hover:text-fuchsia-500 hover:bg-gray-200 transition-bg duration-500 ease-in-out flex ml-20 items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                      Sign in
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}