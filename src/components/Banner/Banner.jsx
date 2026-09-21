import React from "react";
import HeroImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img
          alt="Tailwind CSS hero component"
          src={HeroImg}
          className="max-w-sm"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn mt-8 btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
