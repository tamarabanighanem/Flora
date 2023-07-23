import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/flora-low-resolution-logo-color-on-transparent-background (2).png'
import {  useNavigate } from 'react-router-dom';

const Nav = ({ isLog, updateIsLog }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  function handleLogOut() {
     localStorage.removeItem('user');
     navigate('/')
     window.location.reload();
     updateIsLog(false)
  }

  useEffect(() => {
    const toggleMenu = () => {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };

    document.getElementById("hamburger").addEventListener("click", toggleMenu);

    return () => {
      document.getElementById("hamburger").removeEventListener("click", toggleMenu);
    };
  }, []);
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3  bg-purple-300">
        <Link to={'/'}>  
    <img
    src={logo}
    className="h-10 w-48"
    alt="ACME"
  /></Link>

  <div className="flex md:hidden">
    <button  onClick={() => setNav(!nav)} id="hamburger">
      <img
        className="toggle block"
        src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
        width={40}
        height={40}
      />
      <img
        className="toggle hidden"
        src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
        width={40}
        height={40}
      />
    </button>
  </div>
  <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-purple-900 md:border-none">
    <Link to={'/'}
      className="block md:inline-block text-fuchsia-800 hover:text-black px-3 py-3 border-b-2 border-purple-900 md:border-none"
    >
      Home
    </Link>
  
    <Link to={'/about'}
      className="block md:inline-block text-fuchsia-800 hover:text-black px-3 py-3 border-b-2 border-purple-900 md:border-none"
    >
      About
    </Link>
    <Link to={'/contact'}
      className="block md:inline-block text-fuchsia-800 hover:text-black px-3 py-3 border-b-2 border-purple-900 md:border-none"
    >
      Contact
    </Link>
  
  </div>
  
  <div class="sm:flex sm:gap-4">
                  {
                     localStorage.user ?<>
                     <Link to={'/profile'}>
                                       <div className="relative w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
  <svg
    className="absolute w-12 h-12 text-gray-400 -left-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
</div>
</Link>
  <Link onClick={handleLogOut} to="/signIn" className='block rounded-md bg-fuchsia-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-fuchsia-600'>Log Out </Link>
      
</>
  :
  <Link to="/signIn" className='block rounded-md bg-fuchsia-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-fuchsia-600'>Log In
                      
  </Link>
}
</div>
</nav>




    </div>
  )
}

export default Nav
