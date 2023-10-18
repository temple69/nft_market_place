import React from "react";
import Started from "./Icons/Started";

const Intro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mt-10">
      <div>
        <h1 className="text-base md:text-[2rem] lg:text-[3.5rem] font-bold leading-[4rem]">
          Discover a New Era of Crypto Currency
        </h1>
      </div>
      <div>
        <p className="text-[#ADB9C7] text-[0.8125rem] md:text-base">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <article className="flex gap-3 my-5">
          <button>Get Started</button>
          <Started />
        </article>
      </div>
    </section>
  );
};

export default Intro;
