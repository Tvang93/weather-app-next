import React from "react";

interface Props {
    day: number;
}

const OneDayComponent = (props: Props) => {
  return (
    <div className="flex justify-center grow">
      <div className="flex flex-col items-center grow">
        <h1>{props.day}</h1>
        <img src="/" alt="" />
        <p>H: 65 F</p>
        <p>L: 49 F</p>
      </div>
    </div>
  );
};

export default OneDayComponent;
