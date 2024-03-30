import React from 'react';
import Tilt from 'react-parallax-tilt';
import { technologies, services } from '../Constants/contants';
import '../Components/style.css'
function OverView() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10" id="Overview">
        <h2 className="text-3xl text-pink-500 font-bold mb-4">Introduction</h2>
        <hr className="w-1/3 mb-4" />
        <div className="text-center text-lg px-6">
          Deliwizz Software Solutions is a leading provider of innovative software solutions tailored to meet the unique needs of businesses. We specialize in creating cutting-edge applications using the latest technologies such as Flutter ReactJS, NodeJS, and more. Our team of skilled developers is committed to delivering scalable, efficient, and user-friendly solutions that empower businesses to thrive in today's digital landscape. Let's collaborate to turn your ideas into reality!
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center items-center mt-10 overflow-x-auto hide-scrollbar">
        {services.map((service, index) => (
          <Tilt key={service.icon} className="parallax-effect-glare-scale m-4" perspective={500} glareColor="rgba(254,215,170,0.5)" glareEnable scale={1.02} gyroscope>
            <div className="p-3 flex flex-col items-center">
              <img src={service.icon} alt={service.title} className="h-24 w-24" />
              <div className="text-blue-500 mt-2">{service.title}</div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Technologies Section */}
      <div className="flex flex-wrap justify-center items-center mt-10 overflow-x-auto hide-scrollbar">
        {technologies.map((technology) => (
          <div key={technology.name} className="m-4">
            <div className="h-24 w-24 rounded-2xl shadow-2xl border border-violet-400 hover:shadow-orange-400 flex items-center justify-center">
              <img src={technology.icon} alt={technology.name} className="p-2" />
            </div>
            <div className="text-violet-600 text-center mt-2">{technology.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OverView;
