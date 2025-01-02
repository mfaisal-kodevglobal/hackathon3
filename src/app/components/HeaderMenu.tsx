'use client'
import React, { useState } from "react";


const HeaderMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>

     
          {/* Header Section */}
          <div className="flex justify-between items-center pl-48 py-2 border-b bg-white  w-[1177px] h-[40px] mt-5">

            {/* Logo */}
            <div>
              <a href="/" className="josefin text-lg font-bold">
                Blog Assignment
              </a>
            </div>

            {/* Menu for Desktop */}
            <div className="hidden lg:flex space-x-6 relative">
              {/* Home Link with Dropdown */}
              <div className="group relative">
                
                <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md  min-w-[150px]">
                  
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-sm text-[#0D0E43]"
                  >
                    Blog
                  </a>
                 

                  
                </div>
              </div>

              {/* Pages Link with Dropdown */}
              <div className="group relative">
                
                <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md  min-w-[150px]">
               
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-sm text-[#0D0E43]"
                  >
                    Blog
                  </a>
                  

                  
                </div>
              </div>

              {/* Other Links */}
             
              <a href="/blog" className="text-[#0D0E43] font-medium">Blog</a>
              
            </div>

            {/* Search & Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden sm:flex border mx-2 rounded-sm">
                <input
                  type="text"
                  className="w-full bg-transparent text-sm flex-grow"
                />
                <button type="submit" className=" top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#FB2E86] rounded-e-lg border  focus:ring-4 focus:outline-gray-200  ">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>

              
              {/* Mobile Menu Toggle */}
              <button onClick={handleMenuToggle} className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-md transform transition-transform duration-300 lg:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={handleMenuToggle} className="p-4 text-gray-600 focus:outline-none">
              Close
            </button>
            <ul className="space-y-4 mt-10 px-4">
              <li>
              <a
                    href="/blog"
                    className="block px-4 py-2 text-sm text-[#0D0E43]"
                  >
                    Blog
                  </a>
              </li>
             
             
            </ul>
          </div>
     
    </>
  );
};

export default HeaderMenu;
