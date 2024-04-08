import React from "react";

const Paragraph = ({ data }: { data: string }) => {
  const splitData = data.split("\n");
  return splitData.map((data, index) => (
    <p key={index} className=" leading-[2em] text-[#999999]">{data}</p>
  ));
};

export default Paragraph;
