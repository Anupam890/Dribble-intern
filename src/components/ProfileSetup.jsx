import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dribblePink from "../components/assets/dribblePink.png";

const ProfileSetup = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLocationEntered, setIsLocationEntered] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleLocationChange = (e) => {
    setIsLocationEntered(e.target.value.trim() !== "");
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("avatar", selectedImage);
    try {
      await axios.post("http://localhost:9080/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col relative">
      <div className="top-nav flex items-start absolute top-0 left-10">
        <img src={dribblePink} alt="logo" className="w-30 h-20" />
      </div>
      <div className="profile-container w-full max-w-lg p-4">
        <div className="profile-setup ">
          <h1 className="text-3xl font-bold mb-4">
            Welcome! Let's create your profile
          </h1>
          <p className="text-gray-600 mb-6">
            Let others get to know you better! You can do these later
          </p>
          <div className="image mb-6">
            <div className="flex justify-around items-center">
              <div className="left-cont">
                <h2 className="text-xl font-bold mb-2">Add an avatar</h2>
                <div className="image-container w-32 h-32 rounded-full border-dotted border-[#9D9EA6] border-2 relative">
                  {selectedImage ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="camera-icon flex justify-center items-center w-full h-full absolute top-0 left-0">
                      <FontAwesomeIcon
                        icon={faCamera}
                        className="text-2xl text-[#9D9EA6]"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="right-cont">
                <label
                  htmlFor="avatar"
                  className="btn py-2 px-4 border-solid cursor-pointer font-bold border-2 rounded-md"
                >
                  Choose image
                </label>
                <input
                  type="file"
                  id="avatar"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <span className="text-gray-600 block mt-2">
                  Or choose one of our defaults
                </span>
              </div>
            </div>
          </div>
          <div className="location-cont mb-6">
            <h2 className="text-xl font-bold mb-2">Add your location</h2>
            <input
              type="text"
              placeholder="Enter a location"
              className="border-gray-300 rounded p-2 w-full border-b-2 outline-none"
              onChange={handleLocationChange}
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`btn py-2 px-20 rounded text-white cursor-pointer ${
              isLocationEntered ? "bg-[#EA4B8B]" : "bg-[#FADCEA]"
            }`}
            disabled={!selectedImage || !isLocationEntered}
          >
            Next
          </button>
          <p className="text-[#9D9EA6]">
            or <Link to={"/"}>Press RETURN</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
