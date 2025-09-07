import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 640) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    })
  }, []);

  return (
    <nav className={`${sticky? 'nav1' : ''} fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-3 text-white z-50`}>
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

      <ul className="flex items-center gap-10 font-medium text-sm">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Program</li>
        <li className="hover:text-gray-300 cursor-pointer">About us</li>
        <li className="hover:text-gray-300 cursor-pointer">Campus</li>
        <li className="hover:text-gray-300 cursor-pointer">Testimonials</li>
        <li>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Contact us
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
