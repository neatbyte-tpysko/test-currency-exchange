import React from "react";

export const Input = ({ value, resolveInputValue, setInputValue }) => {
  return (
    <input
      placeholder="0"
      className="border-2 border-black w-[150px] h-[35px] px-[5px]"
      type="number"
      value={value}
      onChange={(e) => {
        setInputValue(e.target.value);
        resolveInputValue(e.target.value);
      }}
    />
  );
};
