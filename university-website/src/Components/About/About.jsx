import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-20 p-5 w-full max-w-5xl" id="about">
            <div className=" w-full md:w-2/5 flex justify-center items-center mb-10 md:mb-0 group relative">
                <img src={about_img} alt="Students" className=" w-full rounded-lg shadow-lg "/>
                <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <img src={play_icon} alt="Play icon" className=" absolute w-20 h-20 cursor-pointer rounded-full " />
            </div>
            
            <div className="w-full md:w-3/5 md:pl-20 text-center md:text-left">
                <h3 className="text-md font-semibold text-blue-600 mb-2">ABOUT UNIVERSITY</h3>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Nurturing Tomorrow's Leaders Today</h1>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p className="text-gray-600 leading-relaxed text-justify">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    );
}

export default About;
