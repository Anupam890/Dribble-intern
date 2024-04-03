import React from "react";
import dribblePink from "../components/assets/dribblePink.png";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DribbleOption = () => {
  const cards = [
    {
      title: "I'm a designer looking to share my work",
      desc: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      title: "I'm looking to hire a designer",
      desc: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      title: "I'm looking for design inspiration",
      desc: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col relative">
        <div className="top-nav flex items-center justify-around absolute top-0 left-10">
          <img src={dribblePink} alt="logo" className="w-30 h-20" />
          <Link to={"#"}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DribbleOption;
