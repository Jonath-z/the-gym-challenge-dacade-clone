import React from "react";

const Button = ({
  title,
  fill = false,
  className = `rounded-full px-5 py-2 font-primary ${
    fill ? "bg-primary text-white" : "text-primary border border-primary "
  }`,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
