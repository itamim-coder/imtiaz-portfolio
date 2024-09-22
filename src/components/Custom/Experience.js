import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function Experience() {
  const data = [
    {
      title: "2023'Dec-",
      content: (
        <div>
          <p className="text-white text-xl font-bold">Moynaa</p>
          <p className="text-white text-sm md:text-lg font-normal my-2">
            Tech Lead <span className="text-sm ml-1">(Part-Time)</span>
          </p>
          <p className="text-white text-sm md:text-lg font-normal mb-8">
            ● Develop a prototype minimal viable product, present the features
            in action for all screen and devices types. <br />● Take necessary
            steps to bring the idea to the market: development to production.
          </p>

          {/* Add clickable Web and Facebook links */}
          <p>
            <a
              href="https://www.moynaa.health" // Replace with the actual web URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Web
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100092721010764" // Replace with the actual Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "2022'July - 2022'Sept",
      content: (
        <div>
          <p className="text-white text-xl font-bold">Powah LTD</p>
          <p className="text-white text-sm md:text-lg font-normal my-2">
            React Native Developer
            <span className="text-sm ml-1">(Intern)</span>
          </p>

          <p className="text-white text-sm md:text-lg font-normal mb-8">
            ● Develop a food ordering app for some local school in Cayman
            Islands. Minimal viable product, present the features in action for
            all screen and devices types. <br />
            ● Working with class components, redux and integrating rest API.
            <br />● Use React And React Native for developing prototypes.
          </p>

          {/* Add clickable Web and Facebook links */}
          <p>
            <a
              href="https://powah.com" // Replace with the actual web URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Web
            </a>
          </p>
          <p>
            <a
              href="#" // Replace with the actual Facebook URL
              //   target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400  hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
