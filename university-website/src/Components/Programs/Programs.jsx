import React from 'react'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'
  

const Programs = () => {
  return (
    <div className="flex gap-6 mt-20 justify-center mb-10 flex-wrap" id="programs">

        <div className="relative w-128 h-80 rounded-lg overflow-hidden group">
            <img className="w-full h-full object-cover rounded-lg" src={program1} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 opacity-0 group-hover:opacity-100 duration-300">
                <img className="w-12 h-12 mb-2" src={programIcon1} alt="" />
                <p className="text-lg font-semibold">Graduation Degree</p>
            </div>
        </div>
        <div className="relative w-128 h-80 rounded-lg overflow-hidden group">
            <img className="w-full h-full object-cover rounded-lg" src={program2} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 opacity-0 group-hover:opacity-100 duration-300">
                <img className="w-12 h-12 mb-2" src={programIcon2} alt="" />
                <p className="text-lg font-semibold">Masters Degree</p>
            </div>
        </div>

        <div className="relative w-128 h-80 rounded-lg overflow-hidden group">
            <img className="w-full h-full object-cover rounded-lg" src={program3} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 opacity-0 group-hover:opacity-100 duration-300">
                <img className="w-12 h-12 mb-2" src={programIcon3} alt="" />
                <p className="text-lg font-semibold">Post Graduation</p>
            </div>
        </div>

    </div>
  )
}

export default Programs