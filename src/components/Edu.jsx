import React from "react";
import Card from "./Card";

const Edu = () => {
  return (
    <>
      {/* education */}
      <div className="lg:px-40 px-5 lg:py-0 py-10 gap-5 lg-text-start flex lg:flex-row flex-col-reverse lg:gap-24 items-center bg-sky-100">
        <div className="h-full lg:py-20 flex flex-col justify-center lg-items-start items-center">
          {/* title */}
          <h1 className="text-sky-900 text-4xl font-bold mb-10 leading-normal uppercase">
            Educational Background
          </h1>

          {/* education card */}
          <div className="float-left">
            <div className="mx-auto max-w-4/5 flex flex-row justify-center">
              <div className="mx-2">
                <Card />
              </div>
              <div className="mx-2">
                <Card />
              </div>
              <div className="mx-2">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement */}
      <div className="lg:px-40 px-5 lg:py-0 py-10 gap-5 lg-text-start flex lg:flex-row flex-col-reverse lg:gap-24 items-center bg-sky-300">
        <div className="h-full lg:py-20 flex flex-col justify-center lg-items-start items-center">
          {/* title */}
          <h1 className="text-sky-900 text-4xl font-bold mb-10 leading-normal uppercase">
            Achievements
          </h1>

          {/* educational section */}
          <div className="float-left">
            <div className="mx-auto max-w-4/5 flex flex-row justify-center">
              <div className="mx-2">
                <Card />
              </div>
              <div className="mx-2">
                <Card />
              </div>
              <div className="mx-2">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edu;
