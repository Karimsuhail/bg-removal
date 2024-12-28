/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useClerk, useUser } from "@clerk/clerk-react"; // Import Clerk hooks
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Upload = () => {
  const { removeBg } = useContext(AppContext);
  const { isSignedIn } = useUser(); // Check if user is signed in
  const { openSignIn } = useClerk(); // To open the sign-in modal
  const navigate = useNavigate(); // To navigate programmatically

  const handleUpload = (file) => {
    if (!isSignedIn) {
      // If not signed in, open the sign-in modal
      openSignIn();
    } else {
      // If signed in, proceed with removing background
      removeBg(file);
    }
  };

  return (
    <div className="pb-16">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
        See the magic. Try now
      </h1>
      {/* Upload */}
      <div className="text-center mb-24">
        <input
          onChange={(e) => handleUpload(e.target.files[0])} // Use the handleUpload function
          type="file"
          accept="image/*"
          id="upload2"
          hidden
        />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
