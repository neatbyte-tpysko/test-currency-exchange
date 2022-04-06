import React from "react";

export const Select = ({
  setCurrency,
  currency,
  setInitialСurrency,
  setFinalСurrency,
}) => {
  return (
    <select
      name="select"
      className="border-2 border-black w-[150px]"
      onChange={(e) => {
        setCurrency(e.target.value);
        setInitialСurrency("");
        setFinalСurrency("");
      }}
      defaultValue={currency}
    >
      <option value="UAH">UAH</option>
      <option value="USD">USD</option>
      <option value="EURO">EURO</option>
    </select>
  );
};
