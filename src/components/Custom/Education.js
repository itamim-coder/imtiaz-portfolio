import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Education() {
  const data = [
    {
      title: "2022-26",
      content: (
        <div>
          <p className="text-white text-lg  font-normal ">
            BSc In Computer Science Engineering
          </p>
          <p className="text-white text-sm md:text-lg font-normal my-3">
            Prime University, Bangladesh
          </p>
        </div>
      ),
    },

  ];
  return (
    <div className="">
      <Timeline data={data} />
    </div>
  );
}
