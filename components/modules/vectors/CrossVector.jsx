import React from "react";

const CrossVector = ({ className = "cursor-pointer" }) => {
  return (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
    >
      <path
        d="M.244.41a.833.833 0 0 1 1.179 0l4.41 4.412L10.244.41a.833.833 0 1 1 1.179 1.178L7.012 6l4.41 4.41a.833.833 0 0 1-1.178 1.18l-4.41-4.411-4.411 4.41a.833.833 0 1 1-1.179-1.178L4.654 6 .245 1.588a.833.833 0 0 1 0-1.178Z"
        fill="#676767"
      ></path>
    </svg>
  );
};

export default CrossVector;
