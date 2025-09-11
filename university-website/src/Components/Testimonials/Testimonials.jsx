import React from 'react'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className=" forMargin overflow-visible" id="testimonials">
      <ul className="flex extendingWidth flex flex-wrap sm:justify-center">
        <li>
          <div className="bg-white p-3 rounded-md shadow-lg hover:shadow-2xl transition-shadow studentCard">
            <img
              src={user1}
              alt="Student"
              className="w-40 h-32 object-cover rounded-md mb-3"
            />
            <div className="mb-1">
              <h3 className="font-semibold text-base text-gray-800">AJ Lee</h3>
              <span className="text-gray-500 text-xs">Edusity, USA</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              As a student at Edusty University, my journey has been both
              challenging and rewarding. The campus is a blend of modern
              facilities and a supportive community, making it an ideal
              environment for academic and personal growth.
            </p>
          </div>
        </li>

        <li>
          <div className="bg-white p-3 rounded-md shadow-md hover:shadow-2xl transition-shadow studentCard">
            <img
              src={user2}
              alt=""
              className="w-40 h-32 object-cover rounded-md mb-3"
            />
            <div className="mb-1">
              <h3 className="font-semibold text-base text-gray-800">
                Roman Regins
              </h3>
              <span className="text-gray-500 text-xs">Edusity, USA</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              Studying at Edusty University has been an enriching experience,
              full of both challenges and accomplishments. The campus combines
              state-of-the-art facilities with a welcoming community, creating a
              perfect setting for both learning and personal development.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Testimonials
