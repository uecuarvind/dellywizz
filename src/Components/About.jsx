import React from 'react';
import Styles from '../utils/Styles';
import '../App.css';

function About() {
  return (
    
    <div className="about-container">
      <div className="about-content ">
        <span className={Styles.heroHeadText} >
          Hi, We are <br />
          <span className="text-violet-500">Deliwizz Software Solution</span>
          <br />
          <span className={Styles.heroSubText}>
            Your Trusted Partner in Software Solutions
          </span>
        </span>

        {/* <div className="resume-button">
          <a href={Resume} download={Resume} target="_blank" rel="noreferrer">
            <div className="button">
              Resume
            </div>
          </a>
        </div> */}
      </div>

      {/* <div className="profile-image">
        <img src={Profile} alt="profile" />
      </div> */}
    </div>
  );
}

export default About;





// import React from 'react'

// import about from '../assets/about.jpeg'
// import Styles from '../utils/Styles'
// import Resume from '../assets/a1.png'
// import Profile from '../assets/contactus.jpeg'
//  import Appcss from '../App.css'
// function About() {

//   console.log(Styles.heroHeadText)
//   return (


//     <div className='flex flex-wrap justify-center items-center mt-10 p-10 ' id='Home'>


//       <div className="flex-1 py-4">
//         <span className={Styles.heroHeadText}>
//           Hi, I'm <span className="text-violet-600">Pankaj Kushwah</span>
//           <br />
//           <span className={Styles.heroSubText}>
//             I am MERN Stack Developer & <br /> Freelancer
//           </span>
//         </span>

//         <div className='w-[14rem]'>
//           <a href="{Resume}" download={Resume} target='blank' rel='noreferrer'>
//             <div className="p-4 mt-2 rounded-xl text-orange-500 flex justify-center border-2 border-blue-300 
//             shadow-lg
//             hover:border-violet-500 hover:shadow-pink-500">
//               Resume
//             </div>
//           </a>
//         </div>
//       </div>

//       <div className="flex flex-wrap">
//         <img src={Profile} alt="profile" className="element object-contain p-4" />
//       </div>
//     </div>
//   );
// }

// export default About;


