import React, { SVGProps } from "react";

const RightArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "25"}
      height={props.height || "24"}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M4.14856 12H20.1486M20.1486 12L14.1486 6M20.1486 12L14.1486 18"
        stroke={props.color || "white"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
