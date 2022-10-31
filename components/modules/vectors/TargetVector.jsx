import React from "react";

const TargetVector = ({ className = "w-[180px] h-[180px] mx-auto" }) => {
  return (
    <svg
      viewBox="0 0 296 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill="url(#Target_svg__a)" d="M0 0h296v296H0z"></path>
      <path
        opacity="0.05"
        d="M238 147c0 49.639-40.137 90-89.5 90S59 196.639 59 147c0-49.64 40.137-90 89.5-90S238 97.36 238 147Z"
        fill="#676767"
      ></path>
      <path
        d="M148.5 215c37.279 0 67.5-30.221 67.5-67.5 0-37.279-30.221-67.5-67.5-67.5-37.279 0-67.5 30.221-67.5 67.5 0 37.279 30.221 67.5 67.5 67.5Z"
        fill="#fff"
      ></path>
      <path
        d="M181.866 180.707c18.408-18.435 18.408-48.325 0-66.76-18.408-18.435-48.253-18.435-66.661 0-18.407 18.435-18.407 48.325 0 66.76 18.408 18.436 48.253 18.436 66.661 0Z"
        fill="url(#Target_svg__b)"
      ></path>
      <path
        d="M148.877 173.484c14.419-.181 25.962-12.033 25.781-26.474-.18-14.44-12.015-26-26.433-25.819-14.419.18-25.962 12.033-25.782 26.473.181 14.44 12.015 26 26.434 25.82Z"
        fill="#fff"
      ></path>
      <circle
        opacity="0.2"
        cx="148.5"
        cy="147.5"
        r="12.5"
        fill="#676767"
      ></circle>
      <path
        d="m147.5 148 77.303-90.446"
        stroke="#676767"
        strokeMiterlimit="10"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M146.679 139.207a.5.5 0 0 1 .527.471l.443 7.973 7.973-.442a.5.5 0 0 1 .055.998l-8.472.47a.499.499 0 0 1-.527-.471l-.47-8.472a.5.5 0 0 1 .471-.527Z"
        fill="#676767"
      ></path>
      <path
        d="M203.139 81 224 56.603 211.02 52 189 77.548 203.139 81ZM205 82.561 226.176 58 233 70.049 210.882 96 205 82.561Z"
        fill="#9092FB"
      ></path>
      <defs>
        <linearGradient
          id="Target_svg__a"
          x1="252.652"
          y1="43.348"
          x2="43.348"
          y2="252.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFEFF"></stop>
          <stop offset="1" stopColor="#F1F7FF"></stop>
        </linearGradient>
        <linearGradient
          id="Target_svg__b"
          x1="115.205"
          y1="113.947"
          x2="139.073"
          y2="189.318"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BDDE2"></stop>
          <stop offset="0.479" stopColor="#86B5EF"></stop>
          <stop offset="1" stopColor="#9092FB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TargetVector;
