import React from "react";
import { Education } from "./Custom/Education";
import { Experience } from "./Custom/Experience";

const Info = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2 className="title">Experience</h2>
          <Experience />
        </div>
        <div className="w-1/2">
          <h2 className="title text-center">Education</h2>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Info;
