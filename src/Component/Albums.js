import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    // Fetch albums data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentAlbums = albums.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    {/* <div className='bg-fuchsia-100 p-10'> */}
      <div className="mx-auto  mt-36 max-w-screen-sm text-center lg:mb-16">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Our Albums
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          We use an agile approach to test assumptions and connect with the needs of your audience early and often.
        </p>
      </div>
      <div className="p-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {currentAlbums.map((album) => (
          <div
            key={album.id}
            className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {album.title}
            </h5>

            <div className="flex justify-end">
              <Link
                to={`/photo/${album.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-900 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-fuchsia-900 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-900"
              >
                Show
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
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
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none ${
                    currentPage === 2 ? 'bg-fuchsia-600' : 'bg-fuchsia-600 hover:bg-fuchsia-900'
                  }`}
                  onClick={() => paginate(currentPage - 1)}
                >
                  {currentPage - 1}
                </button>
              )}
              {currentPage !== 1 && currentPage !== Math.ceil(albums.length / postsPerPage) && (
                <button
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none `}
                  disabled
                >
                  {currentPage}
                </button>
              )}
              {currentPage < Math.ceil(albums.length / postsPerPage) - 1 && (
                <button
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none ${
                    currentPage === Math.ceil(albums.length / postsPerPage) - 1
                      ? 'bg-fuchsia-600'
                      : 'bg-fuchsia-600 hover:bg-fuchsia-900'
                  }`}
                  onClick={() => paginate(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
              )}
              {currentPage < Math.ceil(albums.length / postsPerPage) - 2 && <span className="mx-1">...</span>}
              {currentPage !== Math.ceil(albums.length / postsPerPage) && (
                <button
                  className={`mx-1 px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md focus:ring-4 focus:outline-none ${
                    currentPage === Math.ceil(albums.length / postsPerPage) ? 'bg-fuchsia-600' : 'bg-fuchsia-600 hover:bg-fuchsia-900'
                  }`}
                  onClick={() => paginate(Math.ceil(albums.length / postsPerPage))}
                >
                  {Math.ceil(albums.length / postsPerPage)}
                </button>
              )}
            </div>
    
    </>
  );
};

export default Albums;

