import React from "react";

import { Links } from "./Links";

function Intro() {
  return (
    <>
      <div className="max-w-7xl mx-auto  px-1">
        <div className="i">
          <div className="i-left">
            <div className="i-left-wrapper">
              <div className="mt-5">
                <h1 className="text-8xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl p-1 tablet:p-2 w-full laptop:w-4/5 mob:w-full">
                  Hello 👋
                </h1>
                <h1 className="text-8xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl p-1 tablet:p-2 w-full laptop:w-4/5 mob:w-full">
                  I'm Manish Kumar - Curious
                </h1>
                <h1 className="text-8xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl p-1 tablet:p-2 w-full laptop:w-4/5 mob:w-full">
                  Designed & Developer
                </h1>
                <h1 className="text-8xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl p-1 tablet:p-2 w-full laptop:w-4/5 mob:w-full">
                  based in Uttrakhand, India.
                </h1>
              </div>
            </div>
            <Links />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
