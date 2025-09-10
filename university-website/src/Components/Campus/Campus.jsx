import React from 'react'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import whiteArrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
   <div className="flex flex-col items-center mt-20" id="campus">

        <div className="flex flex-row gap-6 flex-wrap justify-center">

            <div className="relative group w-64 h-72 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover rounded-lg" src={gallery1} alt="" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
            </div>

            <div className="relative group w-64 h-72 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover rounded-lg" src={gallery2} alt="" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
            </div>

            <div className="relative group w-64 h-72 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover rounded-lg" src={gallery3} alt="" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
            </div>

            <div className="relative group w-64 h-72 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover rounded-lg" src={gallery4} alt="" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
            </div>

        </div>

        <button className="text-white bg-black rounded-3xl p-3 flex items-center mt-10 mb-5 text-sm">
            See more here
            <img src={whiteArrow} alt="" className="ml-2 h-2" />
        </button>

    </div>
  )
}

export default Campus