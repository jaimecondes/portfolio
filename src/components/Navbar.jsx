// Navbar.jsx
import { useState } from "react";
import {Link} from 'react-router-dom'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">🌟 JC</div>

        <div className="hidden md:flex space-x-6">
          <Link 
          to="/"
          >
            <a className="hover:text-indigo-400">Main Page</a>
          </Link>  
          <Link 
          to="/about"
          >
            <a className="hover:text-indigo-400">About me</a>
          </Link>  
          <Link 
          to="/skills"
          >
            <a className="hover:text-indigo-400">Skill Sets</a>
          </Link>  
           <Link 
          to="/apps"
          >
            <a className="hover:text-indigo-400">Apps</a>
          </Link>  
           <Link 
          to="/resume"
          >
            <a className="hover:text-indigo-400">Resume</a>
          </Link>  
           <Link 
          to="/education"
          >
            <a className="hover:text-indigo-400">Education</a>
          </Link>  
         
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-3 px-4">
          <a href="#" className="hover:text-indigo-400">Home</a>
          <a href="#" className="hover:text-indigo-400">About</a>
          <a href="#" className="hover:text-indigo-400">Services</a>
          <a href="#" className="hover:text-indigo-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
