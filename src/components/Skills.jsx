import React from "react";

const Profile = () => {
  return (
    <div className="lg:px-40 px-5 lg:py-0 py-10 gap-5 lg-text-start flex lg:flex-row flex-col-reverse lg:gap-24 items-center bg-[#ffffff]">
      <div className="h-full lg:py-20 flex flex-col justify-center lg-items-start items-center">
        
        {/* title */}
        <h1 className="text-sky-900 text-4xl font-bold mb-10 leading-normal capitalize">
          Medical Specialism and Skills
        </h1>

        {/* technique section */}
        <div className="float-left mb-8 px-3 py-1">
          <img className="w-20 h-20 float-start m-2 mr-6" src="src\assets\image\john.jpg" alt="" />
          <h3 className="font-semibold text-2xl">
            Surgical Technique
           </h3>
          <p className="my-1">
          Proficiency in performing various surgical procedures, including minimally invasive techniques and open surgeries.
          </p>
        </div>

        <div className="float-right mb-8 px-3 py-1">
          <img className="w-20 h-20 float-end m-2 mr-6" src="src\assets\image\john.jpg" alt="" />
          <h3 className="font-semibold text-2xl">
            Internal Medicine
           </h3>
          <p className="my-1">
          Focuses on the diagnosis, treatment, and management of adult diseases and chronic conditions, often involving complex cases and multi-system disorders.
          </p>
        </div>

        <div className="float-left mb-8 px-3 py-1">
          <img className="w-20 h-20 float-start m-2 mr-6" src="src\assets\image\john.jpg" alt="" />
          <h3 className="font-semibold text-2xl">
          Cardiology
           </h3>
          <p className="my-1">
          Specializes in the diagnosis and treatment of heart diseases and conditions, including coronary artery disease, heart failure, and arrhythmias.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Profile;
