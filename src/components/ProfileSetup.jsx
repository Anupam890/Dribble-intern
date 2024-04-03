import dribblePink from "../components/assets/dribblePink.png";
import React from "react";
import {useState} from "react";

export const ProfileSetup = ()=>{
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-16 w-full h-screen">
            <div className="left w-1/4 h-screen ">

                <img src={dribblePink} alt="logo" className="w-8 h-8" />

            </div>
            
        </div>
        </>
    )

}

