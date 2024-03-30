import React from 'react';
import { GrGithub, GrLinkedinOption, GrMail } from 'react-icons/gr';
import {BiSolidPhoneCall} from 'react-icons/bi'
function Footer() {
  return (
    <>
      <div className="w-screen bg-black">
        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a href="https://github.com/Pankaj-kushwah1/delywizz-software-solution" className="text-lg flex flex-row text-violet-300">
            <div className="h-30 w-30 rounded-full flex justify-center items-center bg-violet-400">
              <GrLinkedinOption className="text-white" />
            </div>
            <span className="text-white ml-1 mt-0.1rem">DelyWizz</span>
          </a>
        </div>


        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a href="arvindkumargupta@deliwizz.com" className="text-lg flex flex-row text-violet-300">
            <div className="h-30 w-30 rounded-full flex justify-center items-center bg-violet-400">
              <GrMail className="text-white" />
            </div>
            <span className="text-white ml-1 mt-0.1rem">arvindkumargupta@deliwizz.com</span>
          </a>
        </div>


        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a href="https://github.com/Pankaj-kushwah1/delywizz-software-solution" className="text-lg flex flex-row text-violet-300">
            <div className="h-30 w-30 rounded-full flex justify-center items-center bg-violet-400">
              <BiSolidPhoneCall className="text-white" />
            </div>
            <span className="text-white ml-1 mt-0.1rem">9352792687</span>
          </a>
        </div>



        <div className="flex flex-row p-2 flex-wrap justify-around ">
          <a href="https://github.com/Pankaj-kushwah1/delywizz-software-solution" className="text-lg flex flex-row text-violet-300">
            <div className="h-30 w-30 rounded-full flex justify-center items-center bg-violet-400">
              <GrGithub className="text-white" />
            </div>
            <span className="text-white ml-1 mt-0.1rem">DelyWizz</span>
          </a>
        </div>



      </div>
    </>
  );
}

export default Footer;
