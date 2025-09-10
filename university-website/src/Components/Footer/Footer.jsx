import React from 'react'

const Footer = () => {
  return (
    <div className='footer border-t border-gray-400 flex justify-between items-center mt-24 mb-5 mx-40'>
      <p className="text-sm">© 2024 Edusity. All rights reserved.</p>
      <ul className="flex gap-6 text-sm items-center">
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer