import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col bg-black text-wheat">
      <div>
        <div className="flex flex-col md:flex-row justify-around p-6">
          <div className="text-left tracking-wide m-4">
            <h1 className="text-[25px] text-[#eb584b] pb-4 border-b-4 w-fit">Contact Us</h1>
            <p>Librarian</p>
            <p>Government School</p>
            <p>Visakhapatnam-530041</p>
            <p>Andhra Pradesh</p>
            <p>India</p>
            <p><b>Email:</b> example@gmail.com</p>
          </div>

          <div className="flex flex-col text-left tracking-wide m-4">
            <h1 className="text-[25px] text-[#eb584b] pb-4 border-b-4 w-fit">Useful Links</h1>
            <a href="#home" className="text-wheat hover:text-[#eb584b]">Link-1</a>
            <a href="#home" className="text-wheat hover:text-[#eb584b]">Link-2</a>
            <a href="#home" className="text-wheat hover:text-[#eb584b]">Link-3</a>
            <a href="#home" className="text-wheat hover:text-[#eb584b]">Link-4</a>
          </div>

          <div className="text-left tracking-wide m-4">
            <h1 className="text-[25px] text-[#eb584b] pb-4 border-b-4 w-fit">Librarian</h1>
            <p>Name</p>
            <p>Education</p>
            <p>Contact: +91 9123456787</p>
          </div>
        </div>

        <div className="flex justify-center items-center my-6">
          <a href="#home" className="m-2">
            <Twitter size={40} color="#eb534b" />
          </a>
          <a href="#home" className="m-2">
            <Linkedin size={40} color="#eb534b" />
          </a>
          
          <a href="#home" className="m-2">
            <Instagram size={40} color="#eb534b" />
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
