import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'

const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0b09f666-2b01-4293-8b53-751178cc136e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
     <div className='contact mt-20 justify-center flex gap-40'>
      <div className='contact-col'>
        <h3 className="flex font-medium text-3xl gap-3">Send us a message <img className="h-8 w-7" src={msg_icon} alt="" /></h3>
        <p className="w-96 text-justify leading-relaxed">Feel free to reach out through contact form or find our contactinformation below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul className="pt-4">
          <li className="flex gap-3 pt-4"><img className="h-7 w-9" src={mail_icon} alt="" />sameershahzad835@gmail.com</li>
          <li className="flex gap-3 pt-4"><img className="h-8 w-7" src={phone_icon} alt="" />0300 1234567</li>
          <li className="flex gap-3 pt-4 pb-5"><img className="h-8 w-7" src={location_icon} alt="" />D-Block , Model Town<br/> Lahore, Pakistan</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit} className="flex flex-col">
          <label className="text-md" for="name">Your Name</label>
          <input className="bg-blue-100 h-12 w-96 rounded-md pl-3 border border-gray-300 focus:outline-none focus:border-blue-800" type="text" id="name" name="name" placeholder="Enter your name" required />

          <label className="text-md pt-5" for="phone">Phone Number</label>
          <input className="bg-blue-100 h-12 w-96 rounded-md pl-3 border border-gray-300 focus:outline-none focus:border-blue-800" type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required />
          
          <label className="pt-5 " for="message">Write your message here</label>
          <textarea className="bg-blue-100 h-40 w-96 rounded-md pl-3 pt-2 border border-gray-300 focus:outline-none focus:border-blue-800" id="message" name="message" rows="6" placeholder="Enter your message" required></textarea>

         <button type="submit" className="flex mt-5 mb-3 items-center gap-2 bg-blue-600 text-white text-sm font-medium px-2 py-2 w-32 h-10 rounded-3xl rounded-md shadow-md hover:bg-blue-700 transition">Submit now<img src={white_arrow} alt="" className="w-4 h-3" /></button>

        </form>

        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contacts