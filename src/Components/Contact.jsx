import React from 'react';
import Styles from '../utils/Styles';
import contact from '../assets/contactus.jpeg'
function Contact() {
  return (
    <>
      <div className="flex-row items-center pl-5 justify-center pt-3" id="contact">
        <span className={Styles.sectionHeadText}>Contact Us</span>
        <hr className="w-[35%]" />
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap flex-row justify-around">
          <div className="lg:w-[40%]">
            <form action="" className="m-5 flex flex-col gap-3">
              <label htmlFor="" className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="What is your good name?"
                  className="bg-orange-200 py-4 px-6 placeholder-text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">Email</span>
                <input
                  type="text"
                  name="email"
                  placeholder="What is your email?"
                  className="bg-orange-200 py-4 px-6 placeholder-text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">Your Message</span>
                <textarea
                  name="message"
                  placeholder="Write your message here"
                  className="bg-orange-200 py-4 px-6 placeholder-text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                ></textarea>
              </label>

<button className="bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary">
    Submit
</button>

            </form>
          </div>

          <div className="lg:w-[50%] ">
            <img src={contact} alt="contact" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
