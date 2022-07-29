import React from "react";
import AI from "../../Images/image-interactive.jpg";

const SectionAI = () => {
  return (
    <section className="relative mx-auto mb-44 max-w-[70rem] px-6">
      <div className="max-w-[46rem]">
        <img src={AI} alt="a man with glass" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 max-w-[34rem] bg-white px-20 pt-20">
        <h2 className="mb-8 text-4xl">THE LEADER IN INTERACTIVE VR</h2>
        <p className="pb-2 text-[13px] leading-[1.7] text-[#8c8c8c]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default SectionAI;
