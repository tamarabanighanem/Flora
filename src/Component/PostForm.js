import React, { useState } from 'react'

const PostForm = ({setrefresh,refresh}) => {
  const userData = JSON.parse(localStorage.getItem("user")); 
  console.log(userData.id)
const [title,setTitle]=useState()
const [body,setBody]=useState()
const handleSubmit=(e)=>{
  e.preventDefault();
  const post={
    id:userData.id,
    title:title,
    body:body
  }
   // Get the existing posts from localStorage or initialize an empty array
   const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

   // Add the new post to the existing array
   const updatedPosts = [...existingPosts, post];

   // Save the updated posts array in localStorage
   localStorage.setItem('posts', JSON.stringify(updatedPosts));
console.log(updatedPosts)
   // Clear the form fields
   setTitle('');
   setBody('');
   setrefresh(!refresh)
 };


  return (
    
<div  className="container mx-auto  flex justify-center items-center ">
        <div className=" py-16 w-full">
        <div className=" relative flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1581275657298-fc5a9137a1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="dining"
        className="w-full h-full absolute  z-0 xl:block"
      />
  
      <div className="bg-black bg-opacity-40 w-full lg:py-36 py-60 md:px-20 px-10 sm:px-4 flex flex-col items-center justify-center relative z-50">
      <div className="heading text-center font-bold text-2xl m-5 text-white">
    To Add New Post
  </div>
      <form onSubmit={handleSubmit}>
  <div className="editor mx-auto w-96 flex flex-col text-gray-800 border bg-white border-gray-300 p-4 shadow-lg max-w-2xl">
    <input
      className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
      spellCheck="false"
      placeholder="Title" 
      type="text"
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
    />
    <textarea
      className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
      spellCheck="false"
      placeholder="Describe everything about this post here"
      defaultValue={""}
      value={body}
      onChange={(e)=>{setBody(e.target.value)}}
/>
    {/* buttons */}
    <div className="buttons pt-5 flex">
      {/* <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
        Cancel
      </div> */}
      <button type="submit" className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
        Post
      </button>
    </div>
  </div>
  </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default PostForm