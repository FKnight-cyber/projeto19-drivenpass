import React from "react";
import Lottie from "lottie-react";
import letter from "../../assets/chatLetter.json";

const Letter = () => <Lottie animationData={letter} loop={true} />;

export default Letter;