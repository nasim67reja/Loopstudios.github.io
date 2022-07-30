import React from "react";
import Earth from "./../../Images/image-deep-earth.jpg";
import Night from "./../../Images/image-night-arcade.jpg";
import Soccer from "./../../Images/image-soccer-team.jpg";
import Grid from "./../../Images/image-grid.jpg";
import VR from "./../../Images/image-from-above.jpg";
import Borealis from "./../../Images/image-pocket-borealis.jpg";
import Curiosity from "./../../Images/image-curiosity.jpg";
import Fisheye from "./../../Images/image-fisheye.jpg";

const images = [Earth, Night, Soccer, Grid, VR, Borealis, Curiosity, Fisheye];
const alt = [
  "Deep earth",
  "Night Arcade",
  "Soccer team vr",
  "the grid",
  "from up above vr",
  "pocket borealis",
  "the curiosity",
  "make it fisheye",
];

const SectionGl = () => {
  return (
    <section className="mb-36">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mb-16 flex items-center justify-between">
          <h3 className="text-3xl">OUR CREATIONS</h3>
          <button className="border-[1px] border-black px-8 py-[6px] text-[12px] tracking-[3px] hover:bg-black hover:text-white">
            SEE ALL
          </button>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {images.map((image, i) => (
            <a href="_" className="relative" key={Math.random()}>
              <img src={image} alt={alt[i]} />
              <div className="custom-bg-card absolute top-0 left-0 h-full w-full"></div>
              <h2 className="absolute bottom-4 left-6 w-[10rem] text-center text-[30px] text-[#8c8c8c]">
                {alt[i].toUpperCase()}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGl;
