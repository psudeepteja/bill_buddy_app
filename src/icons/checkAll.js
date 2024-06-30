import React from 'react';

export default function CheckAll({ checkColor }) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33329 10.4045L10.8688 13.94L17.9391 6.8689M3.16663 10.4045L6.70216 13.94M13.7732 6.8689L11.0833 9.58341"
        stroke={checkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
