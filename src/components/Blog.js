import React from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FollowerPointerCard } from "./ui/following-pointer";
import Image from "next/image";

export function Blog() {
  return (
    <BentoGrid className="max-w-7xl mx-auto bg-gray-800 p-10 rounded-xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
    style={{}}
  >
    <Image
      src={
        "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg"
      }
      alt=""
      height={500}
      width={500}
      className="w-full object-cover rounded-lg"
    />
  </div>
);
const items = [
  {
    title: "Embracing Innovation in Software Development",
    description:
      "Discover how developers turn groundbreaking ideas into software solutions that shape the future of technology.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Transformation: A Developer's Journey",
    description:
      "Explore the role of software engineers in driving the digital revolution and the profound impact on industries worldwide.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Design Patterns: The Art and Science of Clean Code",
    description:
      "Dive into the world of design patterns and how thoughtful software architecture enhances usability and functionality.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Open Source Collaboration",
    description:
      "Learn how developers across the globe leverage open-source projects to accelerate innovation and create impactful solutions.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Continuous Learning in a Developer’s World",
    description:
      "Uncover why lifelong learning is critical for developers to stay ahead of the curve in the ever-evolving tech landscape.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Building with Code: The Joy of Creation",
    description:
      "Experience the excitement and satisfaction of turning ideas into functional applications that solve real-world problems.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Navigating the Developer's Adventure",
    description:
      "Join a developer’s journey through code challenges, problem-solving, and innovation, exploring the thrill of adventure in tech.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
