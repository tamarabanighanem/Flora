
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Posts = ({refresh}) => {
  const [posts, setPosts] = useState([]);
  const [PostLocal,setPostlocal]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);


  useEffect(() => {
    // Fetch posts data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  
    // Get the posts from localStorage or initialize an empty array
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPostlocal(savedPosts);
  }, [refresh]);

  const allPosts = [...posts, ...PostLocal];
  

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        <section className=" dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Posts
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                We use an agile approach to test assumptions and connect with the needs of your audience early and often.
              </p>
            </div>
            <div className="lg:grid-cols-3 mt-10 p-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                  
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{post.body}</p>
                  <div className="flex justify-between items-center">
                  
                    <Link
                      to={`/post/${post.id}`}
                      className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Read more 
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button
                className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none ${
                  currentPage === 1 ? 'bg-fuchsia-900' : 'bg-fuchsia-600 hover:bg-fuchsia-900'
                }`}
                onClick={() => paginate(1)}
              >
                1
              </button>
              {currentPage > 3 && <span className="mx-1">...</span>}
              {currentPage > 2 && (
                <button
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-900 rounded-md focus:ring-4 focus:outline-none ${
                    currentPage === 2 ? 'bg-fuchsia-600' : 'bg-fuchsia-600 hover:bg-fuchsia-900'
                  }`}
                  onClick={() => paginate(currentPage - 1)}
                >
                  {currentPage - 1}
                </button>
              )}
              {currentPage !== 1 && currentPage !== Math.ceil(posts.length / postsPerPage) && (
                <button
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none`}
                  disabled
                >
                  {currentPage}
                </button>
              )}
              {currentPage < Math.ceil(posts.length / postsPerPage) - 1 && (
                <button
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none ${
                    currentPage === Math.ceil(posts.length / postsPerPage) - 1
                      ? 'bg-fuchsia-900'
                      : 'bg-fuchsia-600 hover:bg-fuchsia-900'
                  }`}
                  onClick={() => paginate(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
              )}
              {currentPage < Math.ceil(posts.length / postsPerPage) - 2 && <span className="mx-1">...</span>}
              {currentPage !== Math.ceil(posts.length / postsPerPage) && (
                <button
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none ${
                    currentPage === Math.ceil(posts.length / postsPerPage) ? 'bg-fuchsia-900' : 'bg-fuchsia-600 hover:bg-fuchsia-900'
                  }`}
                  onClick={() => paginate(Math.ceil(posts.length / postsPerPage))}
                >
                  {Math.ceil(posts.length / postsPerPage)}
                </button>
              )}
            </div>
          </div>
        </section>
      </ul>
    </div>
  );
};

export default Posts;
