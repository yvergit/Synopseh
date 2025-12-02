import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=MgADFQKlQZg&list=OLAK5uy_ndZAwbkuVDG4R_qsGS_lQzDXV-9VTBDao", "_blank")
          }
          className='black_btn'
        >
          Surprise
        </button>
      </nav>

      <h1 className='head_text'>
        Synopsize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>Synopseh</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with an open-source gpt4 article summarizer.
        Transform lengthy articles into clear and concise summaries!
      </h2>
    </header>
  );
};

export default Hero;
