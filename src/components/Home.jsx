import React, { useState } from "react";
import { Link } from "react-router-dom";
import dribble from "../components/assets/dribble.png";
import axios from "axios";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register'); 
      console.log(formData);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center">
      {/* Left Part */}
      <div className="left-div md:w-1/3 h-screen bg-[#F2D184] relative">
        <h2 className="absolute top-0 left-0 text-4xl font-bold p-4">
          <img src={dribble} alt="logo" className="w-15 h-10" />
        </h2>
        <h3 className="absolute top-20 left-5 text-3xl ">
          Discover the world's top Designer & Creatives.
        </h3>
        <p className="absolute bottom-0 left-0 p-4 ">
          Art By <Link className="link-underline">Peter Tarka</Link>
        </p>
      </div>

      {/* Right Part */}
      <div className="right-div md:w-2/3 py-8 px-5 md:px-10 lg:px-20 xl:px-32 flex-grow">
        <div className="upperDiv mb-8">
          <p className="text-sm text-right">
            Already a member?{" "}
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
        <div className="form">
          <h2 className="text-2xl mb-4 font-bold">Sign up to Dribble</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* form validation error */}

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md outline-none bg-[#F3F3F3] text-[#B6B6B8]"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md bg-[#F3F3F3] text-[#B6B6B8]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full border p-2 rounded-md bg-[#F3F3F3] text-[#B6B6B8]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="6+ Characters"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full border p-2 rounded-md bg-[#F3F3F3] text-[#B6B6B8]"
              />
            </div>
            <div>
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                Creating an account means you are okay with our{" "}
                <Link to="/terms" className="text-blue-500">
                  Terms of Service
                </Link>
                ,{" "}
                <Link to="/privacy" className="text-blue-500">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              className="bg-[#EA4B8B] text-white px-4 py-2 rounded hover:bg-[#FF85AB]"
              type="submit"
            >
             <Link to={"/setup"}>
             Create Account
             </Link>
            </button>
            <p>The site is protected with reCAPTCHA and Google</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
