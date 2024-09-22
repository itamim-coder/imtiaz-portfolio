"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { IconArrowsMaximize, IconEye } from "@tabler/icons-react";

const technologyImageMap = {
  NextJs: "/assets/nextjs.png", // "NextJs" instead of "Next Js"
  Redux: "/assets/redux.png",
  TypeScript: "/assets/typescript.png",
  Postgres: "/assets/postgres.png",
  Prisma: "/assets/prisma.png",
  ReactJs: "/assets/react.png",
  Tailwind: "/assets/tailwind-css.png",
  Shadcn: "/assets/shadecn.png",
  MongoDB: "/assets/mongodb.png",
  MonGoose: "/assets/mongoose.png",
  ReactNative: "/assets/react-native.png",
  JavaScript: "/assets/javascript.png",
};

const ProjectCard = ({
  id,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  about,
  technology,
}) => {
  // Filter the technology images based on the technology array
  // console.log(technology)
  const technologyImages = technology
    ?.map((tech) => technologyImageMap[tech])
    .filter(Boolean); // Filter out undefined images
  console.log(id);
  return (
    <div className="rounded-xl">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group image-full"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center rounded-t-xl justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-80 hidden group-hover:flex transition-all duration-500">
          <Link
            href={`/project/${id}`}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <IconArrowsMaximize className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            // as={a}
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <IconEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm mb-4">{about}</p>

        {/* Div to show technology images */}
        <div className="flex space-x-2">
          {technologyImages?.map((img, index) => (
            // console.log(img)
            <Image
              key={index}
              src={img}
              alt="Technology"
              className="h-8 w-8 rounded bg-white p-1"
              height={100}
              width={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
