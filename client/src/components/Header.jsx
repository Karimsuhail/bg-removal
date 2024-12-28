/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useClerk, useUser } from "@clerk/clerk-react"; // Import Clerk hooks

const Header = () => {
  const { removeBg } = useContext(AppContext);
  const { isSignedIn } = useUser(); // Check if the user is signed in
  const { openSignIn } = useClerk(); // Open the sign-in modal

  const handleUpload = (file) => {
    if (!isSignedIn) {
      // If the user is not signed in, open the sign-in modal
      openSignIn();
    } else {
      // If signed in, proceed with the removeBg function
      removeBg(file);
    }
  };

  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/*----- Left Side -----*/}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            {" "}
            background{" "}
          </span>{" "}
          from <br className="max-md:hidden" /> images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Transform your images instantly with our tool.{" "}
          <br className="max-sm:hidden" /> Achieve perfect background removal
          every time.
        </p>

        <div>
          <input
            onChange={(e) => handleUpload(e.target.files[0])} // Call the handleUpload function
            type="file"
            accept="image/*"
            id="upload1"
            hidden
          />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>
      {/*----- Right Side -----*/}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
