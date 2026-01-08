import React from "react";

const ContactSection = () => {
  return (
    <div className="py-16 pt-12" id="Contact">
      <div className="container">
        <div className="bg-white text-black py-8 px-10 rounded-3xl text-center md:text-left relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together...
              </h2>
              <p className="text-black/90 text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achive your goals.
              </p>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/abhishek-i-d-7a8020258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-white bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-white/50 cursor-pointer">
                <span className="font-semibold text-black">Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
