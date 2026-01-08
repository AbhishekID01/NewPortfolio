import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-black/15 rounded-full bg-black/10 backdrop-blur">
        <a href="#Hero" className="px-4 py-1.5 rounded-full text-black/70 text-sm font-semibold hover:bg-black/10 transition duration-300">Home</a>
        <a href="#Projects" className="px-4 py-1.5 rounded-full text-black/70 text-sm font-semibold hover:bg-black/10 transition duration-300">Projects</a>
        <a href="#about" className="px-4 py-1.5 rounded-full text-black/70 text-sm font-semibold hover:bg-black/10 transition duration-300">About</a>
        <a href="#Contact" className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black text-white-900 hover:bg-black/70  transition duration-300">Contact</a>
      </nav>
    </div>
  );
};  

export default Navbar;
