'use client'
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Announcement Section */}
<section className="py-3 bg-[#7E33E0] text-white px-4 sm:px-10 h-12 flex items-center justify-between">
  {/* Contact Info */}
  <div className="text-sm flex items-center space-x-6">
    {/* Email */}
    <div className="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.5l-11.707-7.207 1.414-1.414 10.293 6.707 10.293-6.707 1.414 1.414z" />
        <path d="M22.707 9.207l-10.707 7-10.707-7v9.793h21.414z" />
      </svg>
      <span>faisal@gmail.com</span>
    </div>
    {/* Phone */}
   <div className="flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M15.68 1.432a3 3 0 0 0-4.36.041l-1.78 1.837a3 3 0 0 0-.818 2.133c0 .404.033.81.1 1.211l.4 2.45a1 1 0 0 1-.402.957L7.195 12.2a1 1 0 0 1-.926.08l-1.977-.986a3 3 0 0 0-3.244.45l-.996 1.003c-1.457 1.466-.667 4.11 1.487 6.27 2.155 2.158 4.8 2.947 6.27 1.487l1.002-.996a3 3 0 0 0 .45-3.244l-.986-1.977a1 1 0 0 1 .08-.926l2.033-2.225a1 1 0 0 1 .957-.402l2.45.4c.401.067.807.1 1.211.1a3 3 0 0 0 2.133-.818l1.837-1.78a3 3 0 0 0 .041-4.36l-1.775-1.78a3 3 0 0 0-4.36-.041zm-.707 1.414c.44-.44 1.16-.44 1.6 0l1.775 1.78c.44.44.44 1.16 0 1.6l-1.837 1.78a1 1 0 0 1-.711.274c-.32 0-.637-.025-.947-.076l-2.45-.4a3 3 0 0 0-3.002 1.206L7.947 12.47a3 3 0 0 0-.244 3.503l.986 1.977a1 1 0 0 1-.15 1.081l-.996.997c-.566.566-2.09.102-3.653-1.463C2.275 16.008 1.811 14.484 2.376 13.92l.997-.996a1 1 0 0 1 1.081-.15l1.977.986a3 3 0 0 0 3.503-.244l2.225-2.033a3 3 0 0 0 1.206-3.002l-.4-2.45c-.051-.31-.076-.627-.076-.947a1 1 0 0 1 .274-.711l1.78-1.837z" />
  </svg>
  <span>(12345)6789123</span>
</div>

  </div>

  {/* Menu Options */}
  <ul className="flex items-center space-x-6 text-sm">
    {/* Language Dropdown */}
    <li className="flex items-center space-x-2">
     
      <span>English</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </li>
    {/* Currency Dropdown */}
    <li className="flex items-center space-x-2">
     
      <span>USD</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </li>
    {/* Login */}
    <li className="flex items-center space-x-2">
          <span>Login</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.67 0 8 1.34 8 4v2h-16v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      </svg>
  
    </li>
    {/* Wishlist */}
{/* Wishlist */}
<li className="flex items-center space-x-2">
  {/* Heart Outline Icon */}
   <span>Wishlist</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>

 
</li>


{/* Cart */}
<li className="flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4h14l-1.5 9h-13L7 4zm0 0L5.5 2H2v2h2.5L7 4zm10 14c0 1.104-.896 2-2 2s-2-.896-2-2 2-.896 2-2 2 .896 2 2zm-8 0c0 1.104-.896 2-2 2s-2-.896-2-2 2-.896 2-2 2 .896 2 2z" />
  </svg>
</li>

  </ul>
</section>







      {/* Header Section */}
      <div className="flex justify-between items-center px-4 sm:px-10 py-2 border-b bg-white">
        {/* Logo */}
        <div>
          <a href="/" className="text-lg font-bold">
            Hekto
          </a>
        </div>

        {/* Menu for Desktop */}
        <div className="hidden lg:flex space-x-6 relative">
  {/* Home Link with Dropdown */}
  <div className="group relative">
    <div className="flex items-center space-x-2">
      <a
        href="/"
        className="text-gray-700 hover:text-blue-600 font-medium"
      >
        Home
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
    <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md  min-w-[150px]">
      <a
        href="/about"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
       About
      </a>
      <a
        href="/blog"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Blog
      </a>
      <a
        href="/blogsingle"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Blog Single
      </a>

      <a
        href="/cart"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Cart
      </a>
      <a
        href="/checkout"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Checkout
      </a>
      <a
        href="/contactus"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Contact Us
      </a>
      <a
        href="/faq"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Faq
      </a>
      <a
        href="/login"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Login
      </a>
      <a
        href="/notfound404"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Not Found 404
      </a>
      <a
        href="/ordercompleted"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Order Completed
      </a>
      <a
        href="/productdetail"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Product Detail
      </a>
      <a
        href="/shopgrid"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Shop Grid
      </a>
      <a
        href="/shopleftsidebar"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Shop Left Sidebar
      </a>
      <a
        href="/shoplist"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Shop List
      </a>
    </div>
  </div>

  {/* Pages Link with Dropdown */}
  <div className="group relative">
    <div className="flex items-center space-x-2">
      <a
        href="/about"
        className="text-gray-700 hover:text-blue-600 font-medium"
      >
        Pages
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
    <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md  min-w-[150px]">
    <a
        href="/about"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
       About
      </a>
      <a
        href="/blog"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Blog
      </a>
      <a
        href="/blogsingle"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Blog Single
      </a>

      <a
        href="/cart"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Cart
      </a>
      <a
        href="/checkout"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Checkout
      </a>
      <a
        href="/contactus"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Contact Us
      </a>
      <a
        href="/faq"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Faq
      </a>
      <a
        href="/login"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Login
      </a>
      <a
        href="/notfound404"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Not Found 404
      </a>
      <a
        href="/ordercompleted"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Order Completed
      </a>
      <a
        href="/productdetail"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Product Detail
      </a>
      <a
        href="/shopgrid"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Shop Grid
      </a>
      <a
        href="/shopleftsidebar"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Shop Left Sidebar
      </a>
      <a
        href="/shoplist"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
      >
        Shop List
      </a>
    </div>
  </div>

  {/* Other Links */}
  <a
    href="/signup"
    className="text-blue-600 font-medium"
  >
    Products
  </a>
  <a
    href="/blog"
    className="text-blue-600 font-medium"
  >
    Blog
  </a>
  <a
    href="/shop"
    className="text-blue-600 font-medium"
  >
    Shop
  </a>
  <a
    href="/contact"
    className="text-gray-700 hover:text-blue-600 font-medium"
  >
    Contact
  </a>
</div>


        {/* Search & Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden sm:flex bg-gray-50 border px-3 py-1.5 rounded-md">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm outline-none flex-grow"
            />
<button className="bg-[#FB2E86] text-white  flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" className="w-6 h-6 stroke-white fill-none stroke-2">
    <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803z" />
  </svg>
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
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="/signup" className="text-blue-600">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
