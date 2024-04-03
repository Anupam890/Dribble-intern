<div class="profile-container w-full max-w-md p-4">
          <div class="profile-setup mt-4">
            <h1 class="text-3xl font-bold mb-4">
              Welcome! Let's create your profile
            </h1>
            <p class="text-gray-600 mb-6">
              Let others get to know you better! You can do these later
            </p>
            <div class="image mb-6">
              <div class="flex justify-between items-center">
                <div class="left-cont">
                  <h2 class="text-xl font-bold mb-2">Add an avatar</h2>
                  <div class="image-container w-32 h-32  rounded-full border-dotted border-[#9D9EA6] border-2">
                    <div class="camera-icon flex justify-center items-center w-full h-full">
                        <FontAwesomeIcon icon={faCamera} className="text-2xl text-[#9D9EA6]" />
                    </div>
                  </div>
                </div>
                <div class="right-cont">
                  <button class="btn py-2 px-4 border-solid cursor-pointer font-bold border-2 rounded-md">
                    Choose image
                  </button>
                  <span class="text-gray-600 block mt-2">
                    Or choose one of our defaults
                  </span>
                </div>
              </div>
            </div>
            <div class="location-cont mb-6">
              <h2 class="text-xl font-bold mb-2">Add your location</h2>
              <input
                type="text"
                placeholder="Enter a location"
                class=" border-gray-300 rounded p-2 w-full border-b-2  outline-none"
              />
            </div>
            <button class="btn bg-[#EA4B8B] py-2 px-20 rounded text-white ">
              Next
            </button>
            <p>or <Link to={""}>Press RETURN</Link></p>
          </div>
        </div>