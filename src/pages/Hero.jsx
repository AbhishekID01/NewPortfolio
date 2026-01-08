import memojiImage from "../assets/images/memoji-computer.png";

const Hero = () => {
  return (
    <div className="py-32 relative z-0 overflow-x-clip" id="Hero">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
      </div>
      <div className="container flex flex-col items-center">
        <div>
          <img
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
        </div>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Available for Immediate Joining</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-black">
          Building Exceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-black/85 md:text-lg">
          I build fast, responsive, and scalable web interfaces using modern frontend technologies. Focused on clean UI, smooth interactions, and real-world performance..
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
        <a href="#Projects" className="border border-black/15 px-6 h-12 rounded-xl text-black cursor-pointer z-50 flex items-center">
          <span>Explore My Work</span>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-i-d-7a8020258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="inline-flex items-center gap-2 border border-black bg-black text-white-900 h-12 px-6 rounded-xl cursor-pointer z-50">
          <span>👋</span>
          <span className="font-semibold">Let's Connect</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
