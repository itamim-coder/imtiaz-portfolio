"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";

const MyProject = () => {
  const tabs = [
    {
      title: "All",
      value: "all",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData
              .filter((project) => project.tag.includes("All")) // Filter by "Web"
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="initial"
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    about={project.about}
                    technology={project.technology}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      ),
    },
    {
      title: "Web",
      value: "web",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData
              .filter((project) => project.tag.includes("Web")) // Filter by "Web"
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="initial"
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    about={project.about}
                    technology={project.technology}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      ),
    },
    {
      title: "Android",
      value: "android",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br  from-gray-700 to-gray-900">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData
              .filter((project) => project.tag.includes("Android")) // Filter by "Android"
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="initial"
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    about={project.about}
                    technology={project.technology}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      ),
    },
    // Add more tabs if needed...
  ];

  return (
    <>
      <h2 className="title text-center text-white">My Projects</h2>
      <div
        id="projects"
        className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full items-start justify-start mt-10 mb-40"
      >
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};
export default MyProject;
const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
