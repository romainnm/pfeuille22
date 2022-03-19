import React from "react";

export default function ProgressBar({ bgcolor, completed, name }) {
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
    textAlign: "right",
    backgroundColor: bgcolor,
  };

  return (
    <div className="skill-progress">
      <span>{name}</span>
      <div className="container-bar">
        <div style={fillerStyles}>
          <span className="label-bar">{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
}
