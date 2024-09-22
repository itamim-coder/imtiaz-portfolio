"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "LinkedIn",
    // designation: "Software Engineer",
    image:
      "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
    url: "https://www.linkedin.com/in/imtiaz-tamim",
  },
  {
    id: 2,
    name: "Github",
    // designation: "Product Manager",
    image:
      "https://cdn-icons-png.freepik.com/256/11023/11023522.png?uid=R82932155&ga=GA1.1.1572324770.1725637497&semt=ais_hybrid",
    url: "https://github.com/itamim-coder",
  },
];

export function Social() {
  return (
    <div className="flex flex-row mt-12 mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
