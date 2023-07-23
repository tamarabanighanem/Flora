import React from 'react'
import  { useState, useEffect } from 'react';

const Profile = () => {
  const [PostLocal,setPostlocal]=useState([])
  const userData = JSON.parse(localStorage.getItem("user")); 
  console.log(userData)
  console.log(userData.address.city)
  console.log(userData.name)
  let Id=userData.id
  console.log(Id)
  useEffect(() => {
  
  
    // Get the posts from localStorage or initialize an empty array
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const filteredComments = savedPosts?.filter((comment) => comment.id === Id);
    setPostlocal(filteredComments);
  }, [Id]);
   return (
    <div>

<div className="p-16">
  <div className="p-8 bg-white shadow mt-24">
    {" "}
    <div className="grid grid-cols-1 md:grid-cols-3">
      {" "}
      <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
        {" "}
    
      </div>{" "}
      <div className="relative pb-5">
        {" "}
        <div className="w-36 h-36 bg-gray-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </div>{" "}
      </div>{" "}
    
    </div>{" "}
    <div className="mt-20 text-center border-b pb-12">
      {" "}
      <h1 className="text-4xl font-medium text-gray-700">
        {userData.name}
        <br/><span className="font-light text-2xl text-gray-500">{userData.email}</span>
      </h1>{" "}
      <p className="font-light text-gray-600 mt-3">{userData.phone}</p>{" "}
      <p className="mt-8 text-gray-500">
      {userData.address.city}
      </p>{" "}
      <p className="mt-2 text-gray-500">{userData.address.street}</p>
    </div>{" "}
    
  </div>
</div>



{PostLocal.length > 0 && (
<div> 
<div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      My Posts
    </h2>
    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
      We use an agile approach to test assumptions and connect with the needs of your audience early and often.
    </p>
  </div>
   <div className="lg:grid-cols-3 mt-10 p-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {PostLocal.map((post) => (
      <article
        key={post.id}
        className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex justify-between items-center mb-5 text-gray-500"></div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{post.body}</p>
        <div className="flex justify-between items-center"></div>
      </article>
    ))}
  </div></div>
)}
    </div>
  )
}

export default Profile