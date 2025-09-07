import React from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import './Testimonials.css'


const Testimonials = () => {
  return (
    <div className="relative forMargin">
      <img className="absolute rounded-3xl left-0 h-12 againForMargin cursor-pointer bg-blue-800 p-2 " src={back_icon} alt="" />
     <img className="absolute rounded-3xl right-0 h-12 againForMargin cursor-pointer bg-blue-800 p-2" src={next_icon} alt="" />
      <div className="overflow-x-hidden ">
          <ul className="flex extendingWidth">
           
            <li>
              <div className="bg-white p-3 rounded-md shadow-lg hover:shadow-2xl transition-shadow studentCard">
                <img 
                  src={user1} alt="Student" className="w-40 h-32 object-cover rounded-md mb-3" />
                <div className="mb-1">
                  <h3 className="font-semibold text-base text-gray-800">AJ Lee</h3>
                  <span className="text-gray-500 text-xs">Edusity, USA</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  As a student at Edusty University, my journey has been both challenging and rewarding. 
                  The campus is a blend of modern facilities and a supportive community, making it an 
                  ideal environment for academic and personal growth.
                </p>
              </div>
            </li>

            <li>
              <div className="bg-white p-3 rounded-md shadow-md hover:shadow-2xl transition-shadow studentCard">
                  <img src={user2} alt="" className="w-40 h-32 object-cover rounded-md mb-3" />
                  <div className="mb-1">
                    <h3 className="font-semibold text-base text-gray-800">Roman Regins</h3>
                    <span className="text-gray-500 text-xs">Edusity, USA</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">Studying at Edusty University has been an enriching experience, full of both challenges and accomplishments. The campus combines state-of-the-art facilities with a welcoming community, creating a perfect setting for both learning and personal development.</p>
              </div>
            </li>
            <li>
              <div className="bg-white p-3 rounded-md shadow-md hover:shadow-2xl transition-shadow studentCard">
                  <img src={user3} alt="" className="w-40 h-32 object-cover rounded-md mb-3" />
                  <div className="mb-1">
                    <h3 className="font-semibold text-base text-gray-800">Becky Lynch</h3>
                    <span className="text-gray-500 text-xs">Edusity, USA</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">Being a student at Edusty University has offered me numerous opportunities to grow academically and personally. The university's contemporary infrastructure, along with a supportive community, makes it an ideal place for learning and self-improvement.</p>
              </div>
            </li>
            <li>
              <div className="bg-white p-3 rounded-md shadow-md hover:shadow-2xl transition-shadow studentCard">
                  <img src={user4} alt="" className="w-40 h-32 object-cover rounded-md mb-3" />
                  <div className="mb-1">
                    <h3 className="font-semibold text-base text-gray-800">CM Punk</h3>
                    <span className="text-gray-500 text-xs">Edusity, USA</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">At Edusty University, my experience has been both demanding and fulfilling. The combination of advanced facilities and a nurturing community makes the campus an excellent place for pursuing education and developing oneself.</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Testimonials