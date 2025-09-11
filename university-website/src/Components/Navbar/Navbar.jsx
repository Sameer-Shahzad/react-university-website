import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 640) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    })
  }, []);

  const toggleMenu = () => {
    setMenuIcon(!menuIcon);
  }

  return (
    <nav className={`${sticky? 'nav1' : ''} fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-3 text-white z-50`}>
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

      <ul className={`${menuIcon ? '' : 'forMobile'} flex items-center gap-10 font-medium text-sm`}>
        <li className="hover:text-gray-300 cursor-pointer"><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link to="about" smooth={true} offset={-150} duration={500} >About us</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link to="campus" smooth={true} offset={-260} duration={500} >Campus</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li> <Link to="contact" smooth={true} offset={0} duration={500} className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer">Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="h-6 w-auto menuicon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
