import React from "react";

const Profile = () => {
  return (
    <div className="lg:px-40 px-5 lg:py-0 py-10 gap-5 lg-text-start flex lg:flex-row flex-col-reverse lg:gap-24 items-center bg-[#f1f1f1]">
      <div className="h-full lg:py-20 flex flex-col justify-center lg-items-start items-center">
        <h1 className="text-sky-900 text-5xl font-semibold mb-10 leading-normal capitalize">
          Your profile
        </h1>
        <div className="float-left">
          <img className="w-20 h-20 float-start m-2 mr-6" src="src\assets\image\john.jpg" alt="" />
          <h3 className="font-semibold text-2xl">John Lee</h3>
          <p className="my-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aliquam illo voluptas harum nam aliquid, sit id voluptatibus distinctio itaque aut quasi vero nisi cupiditate officia explicabo saepe! Distinctio, nisi.
          </p>
        </div>

        <button className="w-1/4 font-medium mt-6 hover:border-sky-300 bg-white text-sky-600 hover:text-sky-900 py-2 transition-color duration-300">
          Edit profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
