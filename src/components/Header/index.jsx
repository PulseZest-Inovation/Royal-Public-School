import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuData from './menuData';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => {
      window.removeEventListener('scroll', handleStickyNavbar);
    };
  }, []);

  const currentPath = location.pathname;

  return (
    <header className={`left-0 top-0 w-full flex items-center ${sticky ? 'fixed shadow-lg' : 'absolute'} z-40`} style={{ backgroundColor: '#1E3475' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl font-bold text-white">Royal Public School</h1>
            </div>
          </div>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-3xl text-white lg:hidden focus:outline-none transition-transform duration-300"
          >
            <span className={navbarOpen ? 'hidden' : 'block'}>&#9776;</span>
            <span className={navbarOpen ? 'block' : 'hidden'}>&#10005;</span>
          </button>
          <nav
            className={`lg:flex items-center ${navbarOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-16 left-0 right-0 bg-gray-800 lg:bg-transparent z-10 lg:z-auto p-4 lg:p-0 transition-transform transform ${navbarOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'} duration-300`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative">
                  {menuItem.path ? (
                    <Link
                      to={menuItem.path}
                      className={`py-2 lg:py-0 ${currentPath === menuItem.path ? 'text-primary dark:text-white' : 'text-white dark:text-gray-400'} hover:text-primary dark:hover:text-white`}
                    >
                      {menuItem.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex items-center py-2 lg:py-0 text-white dark:text-gray-400 hover:text-primary dark:hover:text-white transition-opacity duration-300"
                      >
                        {menuItem.title}
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 011.06 1.06l-4.24 4.29a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20 ${openIndex === index ? 'block' : 'hidden'} transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                        <ul className="py-2">
                          {menuItem.submenu?.map((submenuItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={submenuItem.path}
                                className="block px-4 py-2 text-sm text-black dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <nav
            className={`lg:flex items-center ${navbarOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-16 left-0 right-0 bg-gray-800 lg:bg-transparent z-10 lg:z-auto p-4 lg:p-0 transition-transform transform ${navbarOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'} duration-300`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
              {/* Existing code */}
              <li>
                <Link to="/notice-board" className="text-white hover:text-primary">Notice Board</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
      
  );
};

export default Header;
