import React from "react";
export const Header = ({ USD, UAH, EURO }) => {
  return (
    <div className="py-[20px] bg-lime-400 px-[40px]">
      <div className="grid md:flex justify-center md:justify-between max-w-[1200px] mx-auto">
        <div>EXCHANGE $</div>
        <div className="md:flex gap-[40px]">
          <div>UAH to USD : {UAH}</div>
          <div>UAH to EURO : {EURO}</div>
          <div>USD to EURO : {USD}</div>
        </div>
      </div>
    </div>
  );
};
