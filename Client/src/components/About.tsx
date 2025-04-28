import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#10190d]">
      <h2 className="relative text-[#ee811e] text-center text-2xl md:text-3xl p-6 font-bold">
        About the Library
      </h2>
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-4">
          <img
            className="w-full max-w-[700px] rounded-2xl p-4 mx-auto"
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
            alt="Library"
          />
        </div>
        <div className="px-4 md:px-12">
          <p className="text-[#dce1db] text-justify text-sm md:text-base font-poppins p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.<br /><br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage.<br /><br />
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour.<br /><br />
            Your suggestions for improvement are always welcome!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
